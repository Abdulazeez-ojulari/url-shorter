/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apirequest {
  export interface EncodeUrlRequestType {
    longUrl: string;
  }

  export interface GetUrlStatisticRequestType{
    shortCode: string,
  }

  export interface DecodeUrlRequestType {
    shortCode: string;
  }
}
