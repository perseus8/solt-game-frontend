import { useContext } from "react";
import { GameContext } from "../context/GameProvider";
import { TOKENS } from "../config";
import { DownArrow } from "./SvgIcons";

const TokenDropdown = () => {
  const { token, setToken } = useContext<any>(GameContext);

  return (
    <div
      className="left-24 text-[16px] font-bold text-yellow-300 absolute z-30 -bottom-11 flex items-center justify-center uppercase leading-[16px] w-[160px] text-center group max-lg:left-16 max-lg:-bottom-6 max-md:left-12 max-md:bottom-1 max-sm:left-0  max-sm:-bottom-8"
      title="Active Token"
    >
      <label className="flex items-center text-xl  max-lg:text-lg max-sm:text-md">
        {TOKENS.filter((item)=>item.symbol == token)[0].name} <DownArrow className="group-hover:rotate-180" />
      </label>
      <div className="uppercase bg-[#431043] rounded-md absolute top-[28px] overflow-hidden invisible group-hover:visible">
        <ul className="flex flex-col">
          {TOKENS.map((item, key) => (
            <li
              className={`text-sm py-1.5 px-5 w-full ${
                token === item ? "active" : ""
              } hover:bg-[#2e0b2e] cursor-pointer`}
              onClick={() => setToken(item.symbol)}
              key={key}
            >
              {`${item.name}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TokenDropdown;
