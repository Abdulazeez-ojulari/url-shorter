import { App } from "antd";
import errorIcon from "../assets/icons/toast/errorInfo.svg";
import successIcon from "../assets/icons/toast/successInfo.svg";
import warningIcon from "../assets/icons/toast/warning.svg";

export const useToast = () => {
  const { notification } = App.useApp();
  const error = (message: string) => {
    notification.error({
      message: <span className="text-[#61220F]">{`${message}`}</span>,
      placement: "topRight",
      className:
        "!bg-[#FDF1ED] !text-[#61220F] border !px-3 !py-6 border-[#61220F] !rounded-[8px] ",
      icon: <img className="h-[25px] w-[25px]" src={errorIcon} alt="" />,
    });
  };
  const success = (message: string) => {
    notification.success({
      message: <span className="text-[#10513F]">{`${message}`}</span>,
      placement: "topRight",
      className:
        "!bg-[#E6FAF4] !text-[#10513F] !px-3 !py-6 !rounded-[8px] !border-[#10513F] ",
      icon: <img className="h-[25px] w-[25px]" src={successIcon} alt="" />,
    });
  };
  const warning = (message: string) => {
    notification.info({
      message: <span className="text-[#663000]">{`${message}`}</span>,
      placement: "topRight",
      className: "!bg-[#FFF7E5] !text-[#663000] !px-3 !py-6",
      icon: <img className="h-[25px] w-[25px]" src={warningIcon} alt="" />,
    });
  };
  return { error, success, warning };
};
