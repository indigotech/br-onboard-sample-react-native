export const QueryParamsInterceptor = {
  before(request) {

    if (request.query) {
      let query = '&' + Object.keys(request.query)
                              .map(key => `${key}=${JSON.stringify(request.query[key])}`)
                              .join('&');

      request.url = request.url + query;
    }

    return request;
  }
}
