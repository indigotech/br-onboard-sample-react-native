export const JsonTypeInterceptor = {
  before(request) {

    const jsonHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    request.headers = Object.assign({}, request.headers, jsonHeaders);

    if (request.body) {
      request.body = JSON.stringify(request.body);
    }

    return request;
  },

  after(response) {
    return response.json();
  }
}
