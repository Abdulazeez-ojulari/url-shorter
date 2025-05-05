import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/helpers";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gradient font-[satoshi-bold]">Url Shorter</h1>
      <div className="flex gap-3">
        <Button
        className="text-sm text-white px-4 py-2 font-[satoshi-regular] rounded bg-transparent border-none hover:text-underline hover:!bg-transparent"
        onClick={() => {
            navigate(ROUTES.HOME);
        }}
        >Home</Button>
        <Button
        className="text-sm text-white px-4 py-2 font-[satoshi-regular] rounded bg-transparent border-none hover:text-underline hover:!bg-transparent"
        onClick={() => {
            navigate(ROUTES.STATS);
        }}
        >View Stats</Button>
      </div>
    </header>
  );
}
