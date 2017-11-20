export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  cognito: {
    REGION: "us-east-1",
    IDENTITY_POOL_ID: "us-east-1:c0100dcb-2eaf-41a8-91b5-ca47121b4ae7",
    USER_POOL_ID: "us-east-1_sZvbgPJFA",
    APP_CLIENT_ID: "5idr98o2ete0el2sdb90lh4m2n"
  },
  apiGateway: {
    URL: "https://5kcnk2fmw1.execute-api.us-east-1.amazonaws.com/prod",
    REGION: "us-east-1"
  },
  s3: {
    BUCKET: "ziraldo-notes-app-uploads"
  }
};