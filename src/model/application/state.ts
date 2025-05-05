/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import { FORM_ACTION } from "../../utils/helpers";
import { Apiresponse } from "../client/response";

export namespace State {
  export interface App {
    request: any;
    response: any;
    current: number;
    showSteps: boolean;
    isPasswordLength: boolean;
    isUpperCase: boolean;
    isLowerCase: boolean;
    hasNumber: boolean;
    isSpecialChar: boolean;
    showSuccessModal?: boolean;
    selectUrl?: string;
    menuCollapsed: boolean;
    selectedKey: string;
    openKey?: string;
    pageTitle: string;
    breadcrumb: string;
    openMenuDrawer: boolean;
    searchTerm?: any;
    action: FORM_ACTION;
    postUrl: string;
    getUrl: string;
    updateUrl: string;
    getPostUrl?: string;
    deleteUrl: string;
    currentSelectedTabKey: string;
    page: number;
    editCategoryId?: number;
    showDeclineDocumentModal?: boolean;
    showChangeRoleModal?: boolean;
    showAuditLogModal?: boolean;
    showAddUserModal?: boolean;
    showAuthModal?: boolean;
    currentAuthModalStep?: string;
    limit: number;
    showCreateTierModal?: boolean;
    selectedMultipleAdmins?:
      | Apiresponse.GetAllAdminUserResponseType[]
      | undefined;
  }
}
