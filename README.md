# buildcrm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Deploy

## Configure aws
aws configure --profile buildcrm

## Frontend
### Build Vue website
npm run build

### Copy Files to S3
aws --region us-east-2 --profile buildcrm s3 sync ./dist s3://build-crm-frontend --delete

### Invalidate Cloudfront
aws configure set preview.cloudfront true && aws cloudfront create-invalidation --distribution-id E3Q3O8JJUFH3PN --paths "/*"

### Make files public (or via AWS console)
aws s3 sync s3://build-crm-frontend s3://build-crm-frontend --acl public-read 

## Backend

### Init environment
eb init

### Create application and environment
eb create build-crm-backend --profile buildcrm

### Deploy
eb deploy --profile buildcrm
