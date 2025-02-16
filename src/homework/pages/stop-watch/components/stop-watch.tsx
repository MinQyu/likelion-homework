import { tm } from '@/utils/tw-merge';
import { useEffect, useRef, useState } from 'react';

const FPS = 1000 / 60;

const getDateNow = () => Date.now();

const formatTime = (time: number) => {
  const miliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  const [hh, mm, ss, ms] = [hours, minutes, seconds, miliseconds].map((unit) =>
    unit.toString().padStart(2, '0')
  );

  return `${hh}:${mm}:${ss}:${ms}`;
};

type IntervalId = ReturnType<typeof setInterval>;

// 컴포넌트 --------------------------------------------------------
function StopWatch() {
  const [startTime, setStartTime] = useState(getDateNow);
  const [nowTime, setNowTime] = useState(getDateNow);
  const [recordTime, setRecordTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const resetTime = () => {
    setStartTime(getDateNow);
    setNowTime(getDateNow);
  };

  const clearIntervalIdRef = useRef<IntervalId>(undefined);

  useEffect(() => {
    if (isStart) {
      resetTime();
      clearIntervalIdRef.current = setInterval(() => {
        setNowTime(getDateNow);
      }, FPS);
    } else {
      clearInterval(clearIntervalIdRef.current);
      setRecordTime((recordTime) => recordTime + nowTime - startTime);
      resetTime();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  const handleStartOrPause = () => {
    setIsStart((s) => !s);
  };

  const handleStop = () => {
    setIsStart(false);
    setRecordTime(0);
    resetTime();
  };

  const timeInfo = formatTime(recordTime + nowTime - startTime);

  return (
    <div
      aria-label="스톱워치"
      className="w-[524px] h-[260px] p-[16px] relative bg-[#5941e1] rounded-xl flex flex-col overflow-hidden"
    >
      <div
        className={tm(
          'bg-[url(/icons/stopwatch-info.svg)]',
          'w-[87px] h-[33px]'
        )}
      ></div>
      <time
        dateTime={timeInfo}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-[56px] font-normal font-['Kode_Mono'] leading-[56px]"
      >
        {timeInfo}
      </time>
      <div className="absolute bottom-[18px] left-1/2 transform -translate-x-1/2 flex gap-[16px]">
        <button
          type="button"
          onClick={handleStartOrPause}
          aria-label={isStart ? '일시정지' : '시작'}
          title={isStart ? '일시정지' : '시작'}
          className={tm(
            [
              isStart
                ? 'bg-[url(/icons/button-pause.svg)]'
                : 'bg-[url(/icons/button-play.svg)]',
            ],
            'size-[37px]'
          )}
        ></button>
        <button
          type="button"
          onClick={handleStop}
          aria-label="정지"
          title="정지"
          className={tm('bg-[url(/icons/button-stop.svg)]', 'size-[37px]')}
        ></button>
      </div>
    </div>
  );
}

export default StopWatch;
