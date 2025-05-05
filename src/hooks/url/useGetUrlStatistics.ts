/* eslint-disable @typescript-eslint/no-explicit-any */
import { endpoints } from "../../store/api/endpoints";
import { useGetDataQuery } from "../../store";
import { Apirequest } from "../../model/client/request";
// import { useNavigate } from "react-router-dom";

const useGetUrlStatistics = (payload: Apirequest.GetUrlStatisticRequestType) => {
    const allUrlStatistic = useGetDataQuery({
      getUrl: `${endpoints.url.getUrlStatistics}/${payload.shortCode}`,
    });
  
    return { allUrlStatistic };
  };

export default useGetUrlStatistics;
