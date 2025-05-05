/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apirequest {
  export interface EncodeUrlRequestType {
    longUrl: string;
  }

  export interface GetUrlStatisticRequestType{
    shortCode: string,
  }

  export interface EditCartPriceRuleRequestType {
    ruleName?: string;
    description?: string;
    isActive?: boolean;
    customerGroups?: string[]; 
    couponType?: 'No Coupon' | 'Specific Coupon';
    code?: string; 
    usesPerCustomer?: number | null; 
    validFrom?: Date;
    validTo?: Date;
    priority?: number;
    publicInRssFeed?: boolean;
    conditions?: Array<any>;
    actions?: any;
  }
}
