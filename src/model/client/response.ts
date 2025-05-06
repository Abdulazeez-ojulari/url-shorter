/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apiresponse {
  export class API<T> {
    responseCode?: string | number = "";
    responseMessage: string = "";
    message: string = "";
    msg: string = "";
    data?: T;
  }

  export interface EncodeUrlResponseType {
    token: string;
    firstName: string;
    lastName: string;
  }

  export interface GetAllUrlResponseType {
    shortCode: string;
    longUrl: string;
    shortUrl: string;
    status: string;
  }

}
