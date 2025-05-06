/* eslint-disable @typescript-eslint/no-explicit-any */
import { endpoints } from "../../store/api/endpoints";
import { useGetDataQuery } from "../../store";

const useGetAllUrls = () => {
    const allUrls = useGetDataQuery({
      getUrl: `${endpoints.url.getAllUrls}`,
    });
  
    return { allUrls };
  };

export default useGetAllUrls;
