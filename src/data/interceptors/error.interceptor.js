export const HttpErrorInterceptor = {
  async after(response) {

    if (!response.ok) {
      const { errors } = await response.json();

      if (errors && errors.length > 0) {
        throw new Error(errors[0].message);
      } else {
        throw new Error('Unknown error');
      }
    }

    return response;
  }
}
