import './counter.css';

interface CounterProps {
  max: number;
  count: number;
  increase: () => void;
  decrease: () => void;
}

function Counter({ max, count, increase, decrease }: CounterProps) {
  return (
    <div className="h-7 px-2 py-0.5 bg-[#eeeeee] rounded-[18px] border border-[#b3b3b3] justify-center items-center inline-flex">
      <button
        className="minus-icon"
        type="button"
        onClick={decrease}
        disabled={count <= 0}
        aria-label="감소 버튼"
      ></button>
      <output className="pl-1 pr-1 w-[11px] h-[24px] flex justify-center items-center text-center text-sm font-semibold">
        {count}
      </output>
      <button
        className="plus-icon"
        type="button"
        onClick={increase}
        disabled={count >= max}
        aria-label="증가 버튼"
      ></button>
    </div>
  );
}

export default Counter;
