

export async function request({ interceptors, ...requestOptions }) {
  try {
    requestOptions = await runInterceptors(requestOptions, 'before', interceptors);

    const { url, ...options } = requestOptions

    debugger;
    let response = await fetch(url, options);

    response = await runInterceptors(response, 'after', interceptors);

    return response;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function runInterceptors(value, hook, interceptors = []) {
  for (const interceptor of interceptors) {
    if (interceptor[hook]) {
      value = await Promise.resolve(interceptor[hook](value));
    }
  }
  return value;
}
