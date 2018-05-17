import { SessionLocalDataSource as session } from '../local/session.local-datasource';

export const AuthenticationInterceptor = {
  async before(options) {

    const authToken = await session.fetchToken();

    if (authToken) {
      options.headers = Object.assign({}, options.headers, { 'Authorization': authToken });
    }

    return options;
  },

  async after(response) {

    if (response.headers['Authorization']) {
      await session.saveToken(response.headers['Authorization']);
    }

    return response;
  }
}
