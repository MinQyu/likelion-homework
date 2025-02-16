import StopWatch from './components/stop-watch';

function StopWatchBoard() {
  return (
    <div className="flex flex-col gap-[16px]">
      <StopWatch />
      <StopWatch />
    </div>
  );
}

export default StopWatchBoard;
