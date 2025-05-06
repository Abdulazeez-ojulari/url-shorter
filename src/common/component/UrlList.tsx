import { Apiresponse } from '../../model/client/response';
import { PageTable } from './PageTable';
import useGetAllUrls from '../../hooks/url/useGetAllUrls';
import { Button, Input, Popover } from 'antd';
import MoreIcon from '../../assets/icons/MoreIcon';
import { ROUTES } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';
import useFilter from '../../hooks/useFilter';
import search from "../../assets/icons/search.svg";
import useReduxToolkit from '../../hooks/useReduxToolkit';
import { setAppKey } from '../../store';

export default function UrlList() {
    const { allUrls } = useGetAllUrls();
    const navigate = useNavigate();
    const  { success } = useToast()
    const { dispatch } = useReduxToolkit();

    async function copyToClipBoard(text: string){
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(text).then(() => {
                success('Copied')
            });
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const { dataSource } = useFilter(allUrls?.data?.data?.urls);

    const columns = [
        {
          title: () => {
            return (
              <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                Long Url
              </p>
            );
          },
          key: "longUrl",
          fixed: "left",
          className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
          render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
            return (
              <span className="">
                <p className="">
                  {record?.longUrl ?? "-"}
                </p>
              </span>
            );
          },
        },
        {
          title: () => {
            return (
              <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                Short Code
              </p>
            );
          },
          width: 100,
          className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
          render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
            return (
              <span className="">
                <p className="">
                  {record?.shortCode ?? "-"}
                </p>
              </span>
            );
          },
          key: "shortCode",
        },
        {
          title: () => {
            return (
              <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                Short Url
              </p>
            );
          },
          key: "url",
          className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
          render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
            return (
              <span className="">
                <p className="">
                  {record?.shortUrl ?? "-"}{" "}
                </p>
              </span>
            );
          },
        },
        {
          title: () => {
            return (
              <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                Status
              </p>
            );
          },
          width: 100,
          className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
          key: "Status",
          render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
            return (
              <span className="">
                <p className="">{record?.status ?? "-"}</p>
              </span>
            );
          },
        },
        {
          title: () => {
            return (
              <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                Total Clicks
              </p>
            );
          },
          width: 100,
          className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
          key: "totalClicks",
          render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
            return (
              <span className="">
                <p className="">{record?.stats.totalClicks ?? "-"}</p>
              </span>
            );
          },
        },
        {
          title: () => {
            return (
              <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                Created Date
              </p>
            );
          },
          width: 150,
          className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
          key: "createdAt",
          render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
            return (
              <span className="">
                <p className="">{record?.createdAt ?? "-"}</p>
              </span>
            );
          },
        },
        {
            title: () => {
              return (
                <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
                  ACTION
                </p>
              );
            },
            key: "4",
            fixed: "right",
            width: 80,
            className: 'bg-[#232630!important] hover:bg-[#2A2D35!important] text-white',
            render: (_: any, record: Apiresponse.GetAllUrlResponseType) => {
              return (
                <div>
                  <Popover
                    trigger={"hover"}
                    placement="topLeft"
                    content={
                      <div className="grid gap-3 w-[12rem]">
                        <Button
                          className=" w-full flex items-center justify-center h-[2.5rem] text-base font-medium font-[satoshi-medium] text-[#102E34] hover:!bg-[#102E34] border-none hover:!text-white transition-all hover:scale-95"
                          onClick={() => {
                            navigate(ROUTES.STATS, { state: record });
                          }}
                        >
                          Stats
                        </Button>

                        <Button
                          className=" w-full flex items-center justify-center h-[2.5rem] text-base font-medium font-[satoshi-medium] text-[#102E34] hover:!bg-[#102E34] border-none hover:!text-white transition-all hover:scale-95"
                          onClick={() => {
                            copyToClipBoard(record.shortUrl);
                          }}
                        >
                          Copy
                        </Button>
                      </div>
                    }
                  >
                    <div>
                      <MoreIcon />
                    </div>
                  </Popover>
                </div>
              );
            },
          },
    ];

    return (
        <div className="mt-10 bg-[#1A1D24] rounded-lg overflow-hidden">
            <PageTable
                onRowSelect={() => {}}
                column={columns}
                dataSource={dataSource}
                extraItem={
                <div className="my-4 flex items-center justify-between">
                    <Input
                    placeholder="Search..."
                    prefix={<img src={search} alt="" />}
                    className="hidden lg:flex lg:w-[18rem] border-[#6A7682] placeholder:text-[#6A7682!important]"
                    onChange={(e) =>
                        dispatch(
                        setAppKey({
                            key: "searchTerm",
                            value: e.target.value,
                        })
                        )
                    }
                    />
                </div>
                }
                loading={allUrls.isLoading}
                total={allUrls?.data?.data.urls.length}
                pageSize={10}
            />
        </div>
    );
}
