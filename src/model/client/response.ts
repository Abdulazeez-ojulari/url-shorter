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

  export interface GetAllCartPriceRuleResponseType {
    id: number;
    ruleName: string;
    description: string;
    isActive: boolean;
    customerGroups: string[]; 
    couponType: 'No Coupon' | 'Specific Coupon';
    code?: string; 
    usesPerCustomer?: number | null; 
    validFrom: Date;
    validTo: Date;
    priority: number;
    publicInRssFeed: boolean;
    conditions: Array<any>;
    actions?: any;
    createdAt: string;
    updatedAt: string;
  }
}
