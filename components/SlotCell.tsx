/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import { SymbolItem } from "./Symbols";

interface CellProps {
  targetIndex: number;
  y: number;
  blur: number;
  symbols: SymbolItem[];
  delay: number;
  isSpinMoveEnd: boolean;
  isReset?: boolean;
}

const SlotCell: FC<CellProps> = ({
  y,
  delay,
  symbols,
  isReset,
  isSpinMoveEnd
}) => {
  return (
    <div className=" w-[156px] bg-[#00000055] overflow-hidden">
      <div
        className="flex flex-col items-center justify-center smooth-moving"
        style={{
          transition: `transform ${
            isReset ? 0 : 6 + delay * 2
          }s cubic-bezier(0.25, 0.1, 0, 0.99), filter 2s`,
          transform: `translateY(-${y}px)`,
          // filter: `blur(${blur}px)`,
          transitionDelay: `${isReset ? 0 : delay * 2}s`
        }}
      >
        {symbols.map((item, key) => (
          <div
            className={`w-[150px] h-[150px] flex items-center justify-center p-4  ${
              key > symbols.length - 4 &&
              item.weight > 0 &&
              item.reward > 0 &&
              item.label.length > 2 &&
              isSpinMoveEnd
                ? "zoom"
                : ""
            } max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-sm:w-[80px] max-sm:h-[80px]`}
            key={key}
          >
            {item.media}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotCell;
