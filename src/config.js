import { themeManager } from 'nachos-ui';
import { HttpRequester } from './core/http';
import {
  AuthenticationInterceptor,
  HttpErrorInterceptor,
  JsonTypeInterceptor,
  QueryParamsInterceptor,
  UnwrapDataInterceptor,
} from './data/interceptors';

export function config() {
  configHttp();
  configTheme();
}

function configHttp() {
  HttpRequester.defaults = {
    baseUrl: 'https://tq-template-server-sample.herokuapp.com',
    interceptors: [
      AuthenticationInterceptor,
      QueryParamsInterceptor,
      HttpErrorInterceptor,
      JsonTypeInterceptor,
      UnwrapDataInterceptor,
    ],
  };
}

function configTheme() {
  const buttonTheme = themeManager.getStyle('Button')

  const newButtonTheme = {
    ...buttonTheme,
  }

  themeManager.setSource('Button', () => (newButtonTheme));
}
