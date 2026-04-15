const Skeleton = () => {
  return (
    <div
      className="min-h-screen bg-zinc-950 px-4 py-6 text-white"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="mx-auto max-w-5xl animate-pulse space-y-6">
        <div className="h-10 w-44 rounded-xl bg-zinc-800" />
        <div className="h-12 w-full rounded-2xl bg-zinc-900" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <div className="h-5 w-2/3 rounded bg-zinc-800" />
            <div className="h-4 w-full rounded bg-zinc-800" />
            <div className="h-4 w-4/5 rounded bg-zinc-800" />
          </div>
          <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <div className="h-5 w-1/2 rounded bg-zinc-800" />
            <div className="h-4 w-full rounded bg-zinc-800" />
            <div className="h-4 w-3/5 rounded bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
