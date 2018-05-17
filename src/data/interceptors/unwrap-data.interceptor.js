export const UnwrapDataInterceptor = {
  after(response) {
    return response.data;
  }
}
