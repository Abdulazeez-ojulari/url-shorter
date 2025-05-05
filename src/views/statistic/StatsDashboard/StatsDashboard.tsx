import { useEffect, useState } from "react";
import useGetUrlStatistics from "../../../hooks/url/useGetUrlStatistics";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";

interface StatsDashboardProp {
    shortCode: string;
}
const StatsDashboard: React.FC<StatsDashboardProp> = ({ shortCode }) => {
    const { allUrlStatistic } = useGetUrlStatistics({shortCode});

    const [countries, setCountries] = useState<any>([]);
    const [browsers, setBrowsers] = useState<any>([]);
    const [oss, setOss] = useState<any>([]);
    const [clicksByDate, setClicksByDate] = useState<any>([]);
    const [generalStats, setGeneralStats] = useState<any>({});

    useEffect(() => {
        console.log(allUrlStatistic)

        const stats = allUrlStatistic.data?.data.statistic;
        if(stats){
            setGeneralStats({
                shortUrl: allUrlStatistic.data?.data.shortUrl,
                longUrl: allUrlStatistic.data?.data.longUrl,
                shortCode: allUrlStatistic.data?.data.shortCode,
                totalClicks: stats.totalClicks,
            })
            const browserData = Object.keys(stats?.browsers).map((browser: string) => {
                return {type: browser, count: stats?.browsers[browser]}
            })
            setBrowsers(browserData)

            const osData = Object.keys(stats?.os).map((os: string) => {
                return {type: os, count: stats?.os[os]}
            })
            setOss(osData)

            const countryData = Object.keys(stats?.countries).map((country: string) => {
                return {country: country, type: country, count: stats?.countries[country]}
            })
            console.log(countryData)
            setCountries(countryData)

            const clicksByDateData = Object.keys(stats?.clicksByDate).map((clicksByDate: string) => {
                return {clicksByDate: clicksByDate, count: stats?.clicksByDate[clicksByDate]}
            })
            setClicksByDate(clicksByDateData)
        }
    }, [allUrlStatistic?.data?.data]);

    return (
        <div className="p-3 my-4 grid gap-4">
            <p className="mb-5 font-[satoshi-medium]">Charts</p>
            <div className="flex items-stretch w-full flex-wrap md:flex-nowrap gap-4">
                <span className="w-full bg-[#1A1D24] px-4 py-2 rounded-[10px] shadow-md">
                    <p className="font-[satoshi-medium] mb-5">General Statistic</p>
                    <div className="grid">
                        <div className="flex gap-4">
                            <h3 className="font-[satoshi-bold]">Short Code:</h3>
                            <p className="font-[satoshi-regular]">{generalStats.shortCode}</p>
                        </div>
                        <div className="flex gap-4">
                            <h3 className="font-[satoshi-bold]">Short Url:</h3>
                            <p className="font-[satoshi-regular]">{generalStats.shortUrl}</p>
                        </div>
                        <div className="flex gap-4">
                            <h3 className="font-[satoshi-bold]">Long Url:</h3>
                            <p className="font-[satoshi-regular]">{generalStats.longUrl}</p>
                        </div>
                        <div className="flex gap-4">
                            <h3 className="font-[satoshi-bold]">Total Clicks:</h3>
                            <p className="font-[satoshi-regular]">{generalStats.totalClicks}</p>
                        </div>
                    </div>
                </span>
                <span className="w-full bg-[#1A1D24] px-4 py-2 rounded-[10px] shadow-md">
                    <p className="font-[satoshi-medium]">Total Countries Volume</p>
                    <BarChart data={countries} xField="country" yField="count" colorField="type" />
                </span>
            </div>
            <div className="flex items-center w-full flex-wrap md:flex-nowrap gap-4">
                <span className="w-full  bg-[#1A1D24] px-4 py-2 rounded-[10px] shadow-md">
                    <p className="font-[satoshi-medium]">Total Browsers Volume</p>
                    <PieChart data={browsers} text="Browser" angleField="count" colorField="type" />
                </span>
                <span className="w-full bg-[#1A1D24] px-4 py-2 rounded-[10px] shadow-md">
                    <p className="font-[satoshi-medium]">Total OS Volume</p>
                    <PieChart data={oss} text="Platform" angleField="count" colorField="type" />
                </span>
            </div>
            <div className="flex items-center w-full flex-wrap md:flex-nowrap gap-4">
                <span className="w-full bg-[#f5deb3] px-4 py-2 rounded-[10px] shadow-md">
                    <p className="font-[satoshi-medium] text-[#000000]">Clicks By Date</p>
                    <LineChart data={clicksByDate} xField="clicksByDate" yField="count" />
                </span>
            </div>
        </div>
    )
}

export default StatsDashboard;