import { ResponseErrors } from './responseErrors';
import { Request, RequestMethod, Response } from './types';

const parseResponse = async <T>(response: globalThis.Response) => {
  const result = (await response.json()) as Response<T>;
  if (!response.ok) {
    throw new ResponseErrors(result.errors || ['Server error']);
  }
  return result;
};

export const getResponse = async <T>({ url, method, body }: Request): Promise<Response<T>> => {
  const response = await fetch(`https://api.artic.edu/api/v1/${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: method || RequestMethod.GET,
    body: JSON.stringify(body),
  });

  return parseResponse<T>(response);
};
