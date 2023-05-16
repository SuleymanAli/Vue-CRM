<template>
  <div class="main">
    <b-container style="max-width:100vw;">
      <b-row class="header">
        <b-col offset="2">
          <h1><b>Calendar</b></h1>
          <b-button @click="setToday" id="setTodayBtn">
            Today
          </b-button>
          <b-button @click="lastWeek" id="lastWeekBtn" class="imgbtn">
            <img src="@/assets/chevron_big_left.svg" alt="" />
          </b-button>
          <b-button @click="nextWeek" id="nextWeekBtn" class="imgbtn">
            <img src="@/assets/chevron_big_right.svg" alt="" />
          </b-button>
          <h2>
            {{ selectedMonthYear }}
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" offset="2">
          <b-row>
            <b-button v-b-modal.create-event class="btn-primary-green"
              >Create an Event</b-button
            >
            <b-modal id="create-event" title="Create new event"> </b-modal>
          </b-row>
          <b-row>
            <b-calendar
              width="23.8vw"
              v-model="calendarValue"
              @context="onContext"
              weekday-header-format="narrow"
              :hide-header="calendarHideHeader"
              start-weekday="1"
            ></b-calendar>
          </b-row>

          <!-- Calendar value  -->
          <!-- <b-row>
          <p>
            Value: <b>'{{ calendarValue }}'</b>
          </p>
          <p class="mb-0">Context:</p>
          <pre class="small">{{ context }}</pre>
        </b-row> -->

          <b-row>
            <b-button
              v-b-toggle.collapse-1
              variant="light"
              class="category category-collapse"
            >
              <h5>Categories</h5>
              <img src="@/assets/chevron_big_down.svg" alt="" />
            </b-button>
            <b-collapse visible id="collapse-1">
              <b-form-checkbox-group
                stacked
                v-model="selectedCat"
                :options="options"
                class="mb-4"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
                v-categoryCheckbox="options"
              ></b-form-checkbox-group>
              <div class="mt-4">
                Selected: <strong>{{ selectedCat }}</strong>
              </div>
            </b-collapse>
          </b-row>
          <b-row>
            <b-button
              v-b-modal.new-category
              variant="light"
              class="category new-category"
            >
              <h5>New Category</h5>
              <img src="@/assets/edit.svg" alt="" />
            </b-button>
            <b-modal id="new-category" title="Create new category:">
              <!-- <form>
              <b-form-group
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
                :state="nameState"
              >
                <b-form-input
                  id="name-input"
                  v-model="name"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="Description"
                label-for="description-input"
                invalid-feedback="Description is required"
                :state="DescriptionState"
              >
                <b-form-textarea
                  id="description-input"
                  v-model="description"
                  :state="DescriptionState"
                  required
                  no-resize
                  rows="5"
                ></b-form-textarea>
              </b-form-group>
            </form> -->
            </b-modal>
          </b-row>
          <b-row>
            <h5 class="staff-title">View by assigned staff:</h5>
            <br />
            <b-form-select
              v-model="staffSelected"
              :options="staffOptions"
            ></b-form-select>
          </b-row>
        </b-col>
        <b-col cols="7">
          <div>
            <b-table-simple fixed borderless>
              <b-thead>
                <b-tr class="th-week-view">
                  <b-th></b-th>
                  <b-th><div class="th-day">MON</div></b-th>
                  <b-th><div class="th-day">TUE</div></b-th>
                  <b-th><div class="th-day">WED</div></b-th>
                  <b-th><div class="th-day">THU</div></b-th>
                  <b-th><div class="th-day">FRI</div></b-th>
                  <b-th><div class="th-day">SAT</div></b-th>
                  <b-th><div class="th-day">SUN</div></b-th>
                </b-tr>
                <b-tr class="th-week-view">
                  <b-th></b-th>
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[0] }"
                    >
                      {{ day[0] }}
                    </div></b-th
                  >
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[1] }"
                    >
                      {{ day[1] }}
                    </div></b-th
                  >
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[2] }"
                    >
                      {{ day[2] }}
                    </div></b-th
                  >
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[3] }"
                    >
                      {{ day[3] }}
                    </div></b-th
                  >
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[4] }"
                    >
                      {{ day[4] }}
                    </div></b-th
                  >
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[5] }"
                    >
                      {{ day[5] }}
                    </div></b-th
                  >
                  <b-th
                    ><div
                      class="th-date"
                      v-bind:class="{ selected: isSelectedDay[6] }"
                    >
                      {{ day[6] }}
                    </div></b-th
                  >
                </b-tr>
              </b-thead>
              <b-tbody class="tbody-week-view">
                <b-tr>
                  <b-th>8 AM</b-th>
                  <b-td>{{ events.mon[8] }}</b-td>
                  <b-td>{{ events.tue[8] }}</b-td>
                  <b-td>{{ events.wed[8] }}</b-td>
                  <b-td>{{ events.thu[8] }}</b-td>
                  <b-td>{{ events.fri[8] }}</b-td>
                  <b-td>{{ events.sat[8] }}</b-td>
                  <b-td>{{ events.sun[8] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>9 AM</b-th>
                  <b-td>{{ events.mon[9] }}</b-td>
                  <b-td>{{ events.tue[9] }}</b-td>
                  <b-td>{{ events.wed[9] }}</b-td>
                  <b-td>{{ events.thu[9] }}</b-td>
                  <b-td>{{ events.fri[9] }}</b-td>
                  <b-td>{{ events.sat[9] }}</b-td>
                  <b-td>{{ events.sun[9] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>10 AM</b-th>
                  <b-td>{{ events.mon[10] }}</b-td>
                  <b-td>{{ events.tue[10] }}</b-td>
                  <b-td>{{ events.wed[10] }}</b-td>
                  <b-td>{{ events.thu[10] }}</b-td>
                  <b-td>{{ events.fri[10] }}</b-td>
                  <b-td>{{ events.sat[10] }}</b-td>
                  <b-td>{{ events.sun[10] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>11 AM</b-th>
                  <b-td>{{ events.mon[11] }}</b-td>
                  <b-td>{{ events.tue[11] }}</b-td>
                  <b-td>{{ events.wed[11] }}</b-td>
                  <b-td>{{ events.thu[11] }}</b-td>
                  <b-td>{{ events.fri[11] }}</b-td>
                  <b-td>{{ events.sat[11] }}</b-td>
                  <b-td>{{ events.sun[11] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>12 AM</b-th>
                  <b-td>{{ events.mon[12] }}</b-td>
                  <b-td>{{ events.tue[12] }}</b-td>
                  <b-td>{{ events.wed[12] }}</b-td>
                  <b-td>{{ events.thu[12] }}</b-td>
                  <b-td>{{ events.fri[12] }}</b-td>
                  <b-td>{{ events.sat[12] }}</b-td>
                  <b-td>{{ events.sun[12] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>1 PM</b-th>
                  <b-td>{{ events.mon[13] }}</b-td>
                  <b-td>{{ events.tue[13] }}</b-td>
                  <b-td>{{ events.wed[13] }}</b-td>
                  <b-td>{{ events.thu[13] }}</b-td>
                  <b-td>{{ events.fri[13] }}</b-td>
                  <b-td>{{ events.sat[13] }}</b-td>
                  <b-td>{{ events.sun[13] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>2 PM</b-th>
                  <b-td>{{ events.mon[14] }}</b-td>
                  <b-td>{{ events.tue[14] }}</b-td>
                  <b-td>{{ events.wed[14] }}</b-td>
                  <b-td>{{ events.thu[14] }}</b-td>
                  <b-td>{{ events.fri[14] }}</b-td>
                  <b-td>{{ events.sat[14] }}</b-td>
                  <b-td>{{ events.sun[14] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>3 PM</b-th>
                  <b-td>{{ events.mon[15] }}</b-td>
                  <b-td>{{ events.tue[15] }}</b-td>
                  <b-td>{{ events.wed[15] }}</b-td>
                  <b-td>{{ events.thu[15] }}</b-td>
                  <b-td>{{ events.fri[15] }}</b-td>
                  <b-td>{{ events.sat[15] }}</b-td>
                  <b-td>{{ events.sun[15] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>4 PM</b-th>
                  <b-td>{{ events.mon[16] }}</b-td>
                  <b-td>{{ events.tue[16] }}</b-td>
                  <b-td>{{ events.wed[16] }}</b-td>
                  <b-td>{{ events.thu[16] }}</b-td>
                  <b-td>{{ events.fri[16] }}</b-td>
                  <b-td>{{ events.sat[16] }}</b-td>
                  <b-td>{{ events.sun[16] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>5 PM</b-th>
                  <b-td>{{ events.mon[17] }}</b-td>
                  <b-td>{{ events.tue[17] }}</b-td>
                  <b-td>{{ events.wed[17] }}</b-td>
                  <b-td>{{ events.thu[17] }}</b-td>
                  <b-td>{{ events.fri[17] }}</b-td>
                  <b-td>{{ events.sat[17] }}</b-td>
                  <b-td>{{ events.sun[18] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>6 PM</b-th>
                  <b-td>{{ events.mon[18] }}</b-td>
                  <b-td>{{ events.tue[18] }}</b-td>
                  <b-td>{{ events.wed[18] }}</b-td>
                  <b-td>{{ events.thu[18] }}</b-td>
                  <b-td>{{ events.fri[18] }}</b-td>
                  <b-td>{{ events.sat[18] }}</b-td>
                  <b-td>{{ events.sun[18] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>7 PM</b-th>
                  <b-td>{{ events.mon[19] }}</b-td>
                  <b-td>{{ events.tue[19] }}</b-td>
                  <b-td>{{ events.wed[19] }}</b-td>
                  <b-td>{{ events.thu[19] }}</b-td>
                  <b-td>{{ events.fri[19] }}</b-td>
                  <b-td>{{ events.sat[19] }}</b-td>
                  <b-td>{{ events.sun[19] }}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>8 PM</b-th>
                  <b-td>{{ events.mon[20] }}</b-td>
                  <b-td>{{ events.tue[20] }}</b-td>
                  <b-td>{{ events.wed[20] }}</b-td>
                  <b-td>{{ events.thu[20] }}</b-td>
                  <b-td>{{ events.fri[20] }}</b-td>
                  <b-td>{{ events.sat[20] }}</b-td>
                  <b-td>{{ events.sun[20] }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

var categoryCheckbox = Vue.directive('CategoryCheckbox', {
  inserted: function (el, binding) {
    binding.value.map((item, key) => {
      var label = el.getElementsByTagName('label')[key]
      label.classList.add(item.color + '-checkbox')
    })
  }
})

function getMonthYear (monday, sunday) {
  var firstMonth = monthNames[monday.getMonth()]
  var firstYear = monday.getFullYear()
  var lastMonth = monthNames[sunday.getMonth()]
  var lastYear = sunday.getFullYear()
  var selectedMonthYear = ''
  if (firstMonth === lastMonth) {
    selectedMonthYear = firstMonth + ' ' + firstYear
  } else if (firstYear === lastYear) {
    selectedMonthYear = firstMonth + '-' + lastMonth + ' ' + firstYear
  } else {
    selectedMonthYear =
      firstMonth + ' ' + firstYear + '-' + lastMonth + ' ' + lastYear
  }
  return selectedMonthYear
}

export default {
  data () {
    return {
      calendarValue: '',
      context: null,
      day: [],
      calendarHideHeader: true,
      isSelectedDay: [],
      selectedMonthYear: '',
      selectedCat: [],
      options: [
        {
          item: 'installation',
          name: 'Installation',
          color: 'secondary-yellow'
        },
        {
          item: 'appointments',
          name: 'Appointments',
          color: 'tertiary-orange'
        },
        { item: 'internal', name: 'Internal', color: 'tertiary-lavender' },
        { item: 'deliveries', name: 'Deliveries', color: 'tertiary-aqua' }
      ],
      staffSelected: null,
      staffOptions: [
        { value: 'all', text: 'All staff' },
        { value: 'a', text: 'a' },
        { value: 'b', text: 'b' },
        { value: 'c', text: 'c' }
      ],
      events: {
        mon: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        tue: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        wed: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        thu: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        fri: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        sat: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        sun: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        }
      }
    }
  },
  methods: {
    clearEvents () {
      this.events = {
        mon: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        tue: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        wed: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        thu: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        fri: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        sat: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        },
        sun: {
          8: [],
          9: [],
          10: [],
          11: [],
          12: [],
          13: [],
          14: [],
          15: [],
          16: [],
          17: [],
          18: [],
          19: [],
          20: []
        }
      }
    },
    showEvents (date) {
      this.clearEvents()
      var dayLookUp = {
        1: 'mon',
        2: 'tue',
        3: 'wed',
        4: 'thu',
        5: 'fri',
        6: 'sat',
        7: 'sun'
      }
      var url = 'http://localhost:3000/events/' + date + '/'
      console.log(url)
      axios
        .get(url)
        .then(res => {
          var i
          for (i in res.data) {
            var dict = {}
            dict.day = new Date(res.data[i].date).getDay()
            dict.startTime = new Date(res.data[i].start_time).getHours()
            dict.notes = res.data[i].notes
            this.events[dayLookUp[dict.day]][dict.startTime].push(dict.notes)
          }
        })
        .catch(e => {})
    },
    setToday () {
      const now = new Date()
      this.calendarValue = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      )
    },
    nextWeek () {
      var lastMonday = this.day[7]
      var monday = new Date(lastMonday)
      monday.setDate(lastMonday.getDate() + 7)

      // set selected day
      var dayIndex = this.isSelectedDay.findIndex(e => e === true)
      var selectedDay = new Date(monday)
      selectedDay.setDate(monday.getDate() + dayIndex)
      this.calendarValue = selectedDay
    },
    lastWeek () {
      var lastMonday = this.day[7]
      var monday = new Date(lastMonday)
      monday.setDate(lastMonday.getDate() - 7)

      // set selected day
      var dayIndex = this.isSelectedDay.findIndex(e => e === true)
      var selectedDay = new Date(monday)
      selectedDay.setDate(monday.getDate() + dayIndex)
      this.calendarValue = selectedDay
    },
    onContext (ctx) {
      function getMonday (d) {
        d = new Date(d)
        var day = d.getDay()
        var diff = d.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday
        return new Date(d.setDate(diff))
      }

      var selectedYMD = ctx.selectedYMD.split('-')
      var selectedDate = new Date(
        selectedYMD[0],
        selectedYMD[1] - 1,
        selectedYMD[2]
      )
      var monday = getMonday(selectedDate)
      var tuesday = new Date(monday)
      tuesday.setDate(monday.getDate() + 1)
      var wednesday = new Date(monday)
      wednesday.setDate(monday.getDate() + 2)
      var thursday = new Date(monday)
      thursday.setDate(monday.getDate() + 3)
      var friday = new Date(monday)
      friday.setDate(monday.getDate() + 4)
      var saturday = new Date(monday)
      saturday.setDate(monday.getDate() + 5)
      var sunday = new Date(monday)
      sunday.setDate(monday.getDate() + 6)

      this.day = [
        monday.getDate(),
        tuesday.getDate(),
        wednesday.getDate(),
        thursday.getDate(),
        friday.getDate(),
        saturday.getDate(),
        sunday.getDate(),
        monday
      ]

      // get events for the week
      var dates = [
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
      ]
      var d
      for (d in dates) {
        this.showEvents(dates[d].toISOString().slice(0, 10))
      }

      // set selected day
      var i
      for (i = 0; i < this.day.length; i++) {
        if (this.day[i] === selectedDate.getDate()) {
          this.isSelectedDay[i] = true
        } else {
          this.isSelectedDay[i] = false
        }
      }

      // set selected month / year
      this.selectedMonthYear = getMonthYear(monday, sunday)

      this.context = ctx
    }
  },
  directives: {
    categoryCheckbox
  },
  mounted () {
    const now = new Date()
    this.calendarValue = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    )
  }
}
</script>

<style lang="scss">
.header {
  padding: 1rem;
  border-bottom: 1px solid #cedde7;
  text-align: left;
}

.header h1 {
  float: left;
  // vertical align to middle
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.header h2 {
  float: left;
  // vertical align to middle
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#setTodayBtn {
  float: left;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.5rem 1.5rem;
  background: white;
  border: 1px solid #00818f;
  box-sizing: border-box;
  border-radius: 10px;
  color: #00818f;

  // vertical align to middle
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.imgbtn {
  float: left;
  margin-left: 5px;
  vertical-align: middle;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
}

.category {
  background-color: white;
  display: block;
  width: 100%;
  color: #00818f;
  margin: 0rem 1rem;
  padding: 1rem 0rem;
}

.category:hover {
  background-color: white;
  color: #00818f;
  box-shadow: none;
  border-right: none;
  border-left: none;
}

.category:focus {
  background-color: white;
  color: #00818f;
  box-shadow: none;
  border-right: none;
  border-left: none;
}

.category h5 {
  color: #00818f;
  float: left;
  font-weight: bold;
  margin-left: 0.5rem;
}

.category img {
  float: right;
  vertical-align: middle;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  right: 0.5rem;
}

.category-collapse {
  border-top: 1px solid #707070;
}

.category-collapse:hover {
  border-top: 1px solid #707070;
  border-bottom: none;
}

.category-collapse:focus {
  border-top: 1px solid #707070;
  border-bottom: none;
}

.custom-control-label::after {
  border: 1px solid black;
}

.secondary-yellow-checkbox::after {
  background-color: #ecbb3d;
}

.tertiary-orange-checkbox::after {
  background-color: #f98341;
}

.tertiary-lavender-checkbox::after {
  background-color: #b1a8de;
}

.tertiary-aqua-checkbox::after {
  background-color: #80c7d0;
}

.new-category {
  border-bottom: 1px solid #707070;
}

.new-category:hover {
  border-bottom: 1px solid #707070;
  border-top: none;
}

.new-category:focus {
  border-bottom: 1px solid #707070;
  border-top: none;
}

#collapse-1 {
  width: 100%;
  text-align: left;
  padding: 0.2rem 1rem;
}

.custom-checkbox {
  margin-bottom: 0.5rem;
  color: #707070;
}

.staff-title {
  margin: 1rem;
  font-style: normal;
  font-weight: bold;
  display: block;
}

.b-calendar {
  margin: 1rem;
}

.b-calendar-grid-caption {
  font-size: 24px;
  color: #707070;
  margin: 0.5rem 0rem;
  text-align: left !important;
}

// Weekdays
small.col.text-truncate {
  color: #c6500e;
  font-weight: bold;
}

// selected date color
.btn.border-0.rounded-circle.text-nowrap.active {
  color: black;
  background-color: #ecbb3d;
}

.b-calendar-grid {
  border: none;
}

.b-calendar-grid-weekdays {
  border: none !important;
}

footer.b-calendar-grid-help {
  display: none;
}

.th-day {
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  align-items: center;
  text-align: center;
}

.th-week-view th {
  padding: 0px;
  padding-top: 6px;
}

.tbody-week-view td {
  border: 1px solid #cedde7;
}

.th-date {
  font-size: 24px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 50%;
  color: #000;
  text-align: center;
  background: white;
  display: inline-block;
}

.selected {
  background: #ecbb3d;
}
</style>
