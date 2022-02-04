let DEBUG = true;
// let host = "https://facial-sass.herokuapp.com";
let host = "http://localhost:8000"
let stripePublishKey = "pk_test_51KJiJWSHLi0vJZWhEMxERjgJZmYh84cFgzIqq5cxBvo2o4RSbYsaQ4I6ytl34bmXH9c6uQoIuaQPR97WX5fhAdXC00JGlWvnCh";
if (DEBUG === false) {
  host = "";
  stripePublishKey = "";
}

export { stripePublishKey };

export const APIEndpoint = `${host}/api`;

export const fileUploadURL = `${APIEndpoint}/demo/`;
export const facialRecognitionURL = `${APIEndpoint}/upload/`;
export const emailURL = `${APIEndpoint}/email/`;
export const changeEmailURL = `${APIEndpoint}/change-email/`;
export const changePasswordURL = `${APIEndpoint}/change-password/`;
export const billingURL = `${APIEndpoint}/billing/`;
export const subscribeURL = `${APIEndpoint}/subscribe/`;
export const APIkeyURL = `${APIEndpoint}/api-key/`;
export const cancelSubscriptionURL = `${APIEndpoint}/cancel-subscription/`;

export const loginURL = `${host}/rest-auth/login/`;
export const signupURL = `${host}/rest-auth/registration/`;
