export const LiveIndicator = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
      </div>
      <span className="text-xs font-medium text-destructive">LIVE</span>
    </div>
  );
};
