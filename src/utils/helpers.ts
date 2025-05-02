/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProps } from "antd";

export type FORM_ACTION =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "READ"
  | "GET_DATA_BY_POST_METHOD";

export const appName = " - URL SHORTER";

export const ROUTES = {
  HOME: "/",
};

export const PAGE_NAMES = {
  HOME: "Home",
};

export const MENU_KEYS = {
  HOME: "1",
};

export const formConfig: FormProps = {
  autoComplete: "off",
  layout: "vertical",
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  requiredMark: "optional",
};

export const FORM_METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const AUTHMODAL_STEPS = {
  CHANGE_PASSWORD: "1",
  RESET_PASSWORD: "2",
  DISABLE_ACCOUNT: "3",
};

export const RESPONSE_CODE = {
  successful: "200",
  badRequest: "400",
  noData: "201",
  internalServerError: "500",
  dataDuplication: " 230",
  unAuthorized: "401",
  invalidToken: "400",
};
