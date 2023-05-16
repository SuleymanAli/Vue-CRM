<template>
  <div class="print container-fluid d-flex flex-column">
    <!-- Print Top -->
    <div class="print__top row">
      <div class="print__logo col-sm-6 d-flex">
        <span>
          <LogoFlooringAndHome width="92" height="62" />
        </span>
        <p>
          143 Bermondsey Rd,<br />
          Toronto, Ontario <br />
          M4A 1X3 <br />
          E: info@flooringandhome.com <br />
          P: 416.755.6555
        </p>
      </div>
      <div class="col-sm-6 pl-4">
        <div class="print__customer">
          <!-- 1.Customer Title -->
          <h3>
            Quote prepared for
          </h3>
          <div class="print__info row">
            <!-- 2.Customer Info -->
            <div class="col-6">
              <h4>John Dancer</h4>
              <div class="d-flex align-items-center">
                <p class="font-weight-bold pr-1">H:</p>
                <p class="mr-4">
                  (416) 555-5555
                </p>
              </div>
              <div class="d-flex align-items-center">
                <p class="font-weight-bold pr-1">M:</p>
                <p>
                  (416) 555-5555
                </p>
              </div>
              <div class="d-flex align-items-center">
                <p class="font-weight-bold pr-1">E:</p>
                <p>
                  john@email.com
                </p>
              </div>
            </div>
            <!-- 3.Customer Shipping Address -->
            <div class="print__address col-6">
              <h4>Shipping address</h4>
              <p>
                81 Main Street
              </p>
              <p>
                Toronto, Ontario
              </p>
              <p>
                M4R-1S3
              </p>
            </div>
          </div>
          <!-- 4.Customer Profile -->
          <div class="print__profile mt-4">
            <h4>
              Account manager
            </h4>
            <div class="d-flex">
              <img src="@/static/dump/profile.png" class="img-fluid" alt="" />
              <p class="align-self-center">
                Aftab Khan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Print Table -->
    <div class="print__table row mt-4">
      <div class="container-fluid mb-4">
        <div class="row">
          <h4 class="mb-6 print--green font-weight-bold">
            Quote #: XXXXXXXXX
          </h4>
        </div>
        <!-- 1.1 Header -->
        <div class="print__borderBottom pb-12 row">
          <div class="col-sm-2 pr-4">
            <h4 class="print--blue">
              Product
            </h4>
          </div>
          <div class="col-sm-4 px-4">
            <h4 class="print--blue">
              Description
            </h4>
          </div>
          <div class="col-sm-2 pl-4">
            <h4 class="print--blue text-center">
              Price
            </h4>
          </div>
          <div class="col-sm-2 pl-4">
            <h4 class="print--blue text-right">
              SF
            </h4>
          </div>
          <div class="col-sm-2 pl-4">
            <h4 class="print--blue text-right">
              Total
            </h4>
          </div>
        </div>
        <!-- 1.2 Body | Rows -->
        <div class="print__borderBottom row pt-4 pb-2">
          <div class="col-sm-2 pr-4">
            <p class="print--gray">
              Mercier <br />
              0000000
            </p>
          </div>
          <div class="col-sm-4 px-4">
            <p class="print--gray">
              Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +, Matte,
              5”, Mercier Genrations
            </p>
          </div>
          <div class="col-sm-2 pl-4">
            <p class="print--gray text-center">
              $5.31
            </p>
          </div>
          <div class="col-sm-2 pl-4">
            <p class="print--gray text-right">
              290.61
            </p>
          </div>
          <div class="col-sm-2 pl-4">
            <p class="print--gray text-right">
              $1,543.14
            </p>
          </div>
        </div>
        <!-- Notes -->
        <div class="print__borderBottom row pt-4 pb-2">
          <div class="col-sm-2 pr-4">
            <p class="print--gray">
              Mercier <br />
              0000000
            </p>
          </div>
          <div class="col-sm-4 px-4">
            <p class="print--gray">
              Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +, Matte,
              5”, Mercier Genrations
            </p>
          </div>
          <div class="col-sm-2 pl-4">
            <p class="print--gray text-center">
              $5.31
            </p>
          </div>
          <div class="col-sm-2 pl-4">
            <p class="print--gray text-right">
              290.61
            </p>
          </div>
          <div class="col-sm-2 pl-4">
            <p class="print--gray text-right">
              $1,543.14
            </p>
          </div>
        </div>
        <div class="print__borderBottom row pt-4 pb-12">
          <div class="col-sm-8">
            <h4 class="print--green pb-12">Notes:</h4>
            <p class="print--black">
              9 boxes @$32.29 There may be additional charges for unforseen
              flooring conditions to be quoted on site. Quarter rounds are not
              included as part of quote Customer to move all personal items,
              small pieces of furniture and disconnect electronics.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Print Total Cost -->
    <div class="print__cost row">
      <div class="col-sm-6 ml-auto">
        <!-- 2.Total Cost -->
        <div class="d-flex justify-content-between mb-12">
          <p class="print--blue pl-5">
            Subtotal
          </p>
          <p class="print--blue">
            $3,112.14
          </p>
        </div>
        <div class="d-flex justify-content-between mb-12">
          <p class="print--blue pl-5">
            HST
          </p>
          <p class="print--blue">
            $210.10
          </p>
        </div>
        <div class="d-flex justify-content-between mb-12">
          <h2 class="print--blue pl-5">
            Total customer charges:
          </h2>
          <h2 class="print--blue">
            $300.00
          </h2>
        </div>
      </div>
    </div>
    <!-- Print Info And Signature -->
    <div class="print__bottom row mt-auto">
      <div class="col-sm-6">
        <div>
          <p class="semi-bold print--green">
            Thank you for shopping at Flooring + Home
          </p>
          <p>
            HST # XXXXXXXXXXX <br /><br />
            Balance payable at time of order unless otherwise specified.
            Unopened boxes in original condition may be retuned within 30 days
            of order, subject to applicable restocking, box minimums and frieght
            fees. Mouldings and tansition pieces are final sale
          </p>
        </div>
      </div>
      <div class="col-sm-6 pl-4">
        <div class="print__signature pt-2">
          <p>Signature</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoFlooringAndHome from '../../components/logos/LogoFlooringAndHome.vue'
export default {
  components: { LogoFlooringAndHome }
}
</script>

<style lang="scss" scoped>
.print {
  height: 100vh;

  &__table,
  &__cost,
  &__bottom {
    padding-left: 20px;
    padding-right: 20px;
  }

  &__borderBottom {
    border-bottom: 1px solid $secondaryBlue;
  }

  &--green {
    color: $green;
  }

  &--blue {
    color: $blue;
  }

  &--gray {
    color: $gray;
  }

  &--black {
    color: $black;
  }

  &__logo {
    padding-top: 25px;

    padding-left: 20px;

    span {
      margin-right: 21px;
    }

    p {
      font-size: 9px;
      line-height: 13px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: $gray;
    }
  }

  &__customer {
    padding-top: 25px;
    padding-left: 46px;
    padding-bottom: 14px;

    background-color: $grayBg;

    h3 {
      font-family: Raleway;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Green */
      color: #00818f;
      margin-bottom: 5px;
    }

    h4 {
      font-family: Raleway;
      font-style: normal;
      font-weight: bold;
      font-size: 9px;
      line-height: 13px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Black */
      color: #1d1c1c;
    }

    p {
      font-family: Raleway;
      font-style: normal;
      font-size: 9px;
      line-height: 13px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Secondary/Accessible Grey */
      color: #707070;
    }
  }

  &__profile {
    h4 {
      font-family: Raleway;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 12px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Green */
      color: #00818f;
      margin-bottom: 11px;
    }

    img {
      width: 23px;
      height: 23px;
      margin-right: 5px;
    }

    p {
      font-weight: normal;
      line-height: 9px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Black */
      color: #1d1c1c;
    }
  }

  &__table {
    h4 {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
    }

    p {
      font-size: 9px;
      line-height: 12px;
    }
  }

  &__cost {
    p {
      font-family: Raleway;
      font-style: normal;
      font-weight: 600;
      font-size: 9px;
      line-height: 12px;
      text-align: right;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Black */
      color: #1d1c1c;
    }

    h2 {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Blue 1 */
      color: #004d8b;
    }
  }

  &__bottom {
    padding-bottom: 38px;

    p.semi-bold {
      font-weight: 600;
    }

    p {
      font-family: Raleway;
      font-size: 7px;
      line-height: 10px;
      font-feature-settings: 'pnum' on, 'lnum' on;
    }
  }

  &__signature {
    border-top: 0.5px solid #1d1c1c;

    p {
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 9px;
      line-height: 12px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      /* Primary/Black */
      color: #1d1c1c;
    }
  }
}
</style>
