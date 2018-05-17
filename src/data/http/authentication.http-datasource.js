import { HttpRequester } from '../../core/http';

const EndPoints = {
  Login: '/authenticate',
}

export const AuthenticationHttpDataSource = {
  login(email, password, rememberMe) {
    const body = { email, password, rememberMe };

    return HttpRequester
      .post(EndPoints.Login)
      .withBody(body)
      .execute();
  }
}
