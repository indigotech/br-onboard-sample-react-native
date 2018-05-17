import { request } from './http.client';

export class HttpRequester {

  withBaseUrl(url) {
    this.baseUrl = url;
    return this;
  }

  withQuery(query) {
    this.query = query;
    return this;
  }

  withBody(body) {
    this.body = body;
    return this;
  }

  withInterceptors(interceptors) {
    this.interceptors = this.interceptors.concat(interceptors);
    return this;
  }

  execute() {
    const baseUrl = this.baseUrl || HttpRequestBuilder.defaults.baseUrl || '';

    const options = {
      url: baseUrl + this.endpoint,
      query: this.query,
      method: this.method,
      body: this.body,
      interceptors: this.interceptors,
    };

    return request(options);
  }
}

HttpRequester.defaults = {
  baseUrl: '',
  interceptors: [],
};

['get', 'post'].forEach(method => {
  HttpRequester[method] = function(endpoint) {
    const requester = new HttpRequester();

    requester.baseUrl = HttpRequester.defaults.baseUrl || '';
    requester.endpoint = endpoint;
    requester.method = method;
    requester.interceptors = HttpRequester.defaults.interceptors || [];

    return requester;
  }
})
