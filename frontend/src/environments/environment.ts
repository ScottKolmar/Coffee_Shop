/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-767-wd4e.us.auth0.com', // the auth0 domain prefix
    audience: 'Drink', // the audience set for the auth0 app
    clientId: 'UjhpdZFNp4UKDYAyjf8zMKLGiLL9tNu2', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100/', // the base url of the running ionic application. 
  }
};
