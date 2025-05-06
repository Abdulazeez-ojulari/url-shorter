import { useLayoutEffect, useState } from 'react';
import Header from '../../common/layout/Header';
import { useLocation } from 'react-router-dom';
import StatsDashboard from './StatsDashboard/StatsDashboard';
import { Input } from 'antd';

const Statistic = () => {
  document.title="Statictics | URL SHORTER"
  const { state } = useLocation();
  const [shortCode, setShortCode] = useState("");
  const [shortCodeValue, setShortCodeValue] = useState("");

  useLayoutEffect(() => {
    if(state)
    setShortCode(state.shortCode)
  }, [state]);
  
  return (
    <div className="dark bg-[#0F1117] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Header />
        <h2 className="text-3xl text-center font-[satoshi-medium] font-medium mb-3 mx-auto">
            Statistics
        </h2>
        {shortCode &&
            <StatsDashboard shortCode={shortCode} setShortCode={setShortCode} />
        }

        {!shortCode &&
        <div className="flex items-center w-[285px] mx-auto bg-[#1A1D24] px-4 py-2 rounded-full shadow-md">
            <Input onChange={(e) => setShortCodeValue(e.target.value)} className="flex-1 bg-transparent outline-none border-none text-white px-2 hover:bg-transparent focus:bg-transparent focus:shadow-none" />
            <button
            onClick={() => setShortCode(shortCodeValue)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium font-[satoshi-medium] border-none"
            >
            Send
            </button>
        </div>
        }
      </div>
    </div>
  );
};

export default Statistic;
