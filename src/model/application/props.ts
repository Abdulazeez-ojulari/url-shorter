/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
import { Rule } from "antd/es/form";
import React from "react";

export namespace AppProps {
  export class FormFieldProps {
    label?: string;
    name?: string;
    type?: string;
    placeHolder?: string;
    value?: string;
    rules?: Rule[];
    maxLength?: number;
    minLength?: number;
  }

  export class PageViewProps {
    pageTitle?: string;
    showPageFilter?: boolean;
    showFilterBtn?: boolean;
    otherPageContents?: React.ReactNode | undefined;
    children?: React.ReactNode;
    selectedKey: string = "";
    btnName?: string | React.ReactNode;
    filterBtnClickAction?: () => void;
    searchPlaceHolder?: string;
    dropDownData?: React.ReactNode;
    aboveFilterChildren?: React.ReactNode;
    downloadLoading?: boolean;
    pageLoading?: boolean;
  }

  export class TableData {
    dataSource?: any[];
    column?: any[];
    loading?: boolean;
    total?: number;
    pageSize?: number;
    onPagination?: () => void;
    shouldExpand?: boolean;
    scrollX?: number;
    emptyHeadingText?: string;
    emptyParagraphText?: string;
    rowSelection?: any;
    onRowSelect: (record: any, rowIndex: number | undefined) => void = () => {};
    pageTitle?: string | React.ReactNode;
    tableHeadAction?: React.ReactNode;
    extraItem?: React.ReactNode;
  }
}
