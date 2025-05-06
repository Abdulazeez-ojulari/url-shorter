/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "../useToast";
import { endpoints } from "../../store/api/endpoints";
import { usePostDataMutation } from "../../store";
import { Apiresponse } from "../../model/client/response";
// import { ROUTES } from "../../utils/helpers";
import { Apirequest } from "../../model/client/request";
// import { useNavigate } from "react-router-dom";

const useDecodeUrl = () => {
  const [decodeUrl, handleDecodeUrlResponse] = usePostDataMutation();

  const { error, success } = useToast();
  // const navigate = useNavigate()

  const handleDecodeUrl = async (
    payload: Apirequest.DecodeUrlRequestType
  ) => {
    
    const response: any = await decodeUrl({
      postUrl: endpoints.url.decodeUrl,
      request: payload,
    });
    const apiResponse: Apiresponse.API<any> =
      response.error?.data ?? response?.data;
    if (apiResponse?.responseCode !== 201) {
      error(
        apiResponse.message ??
          apiResponse?.responseMessage ??
          "Something went wrong!"
      );
    } else {
      success(apiResponse?.responseMessage ?? apiResponse?.message);
      // navigate(ROUTES.PRODUCTS)
    }
    return apiResponse
  };
  return {
    handleDecodeUrl,
    handleDecodeUrlResponse,
  };
};

export default useDecodeUrl;
