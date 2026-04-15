const HomeSkeleton = () => {
  return (
    <div
      className="flex min-h-screen flex-col"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="border-b border-zinc-600 bg-black px-5 py-2">
        <div className="flex animate-pulse items-center justify-between">
          <div className="h-10 w-44 rounded-xl bg-zinc-800" />
          <div className="h-8 w-40 rounded-xl bg-zinc-800" />
        </div>
      </div>

      <main className="grow bg-linear-to-br from-zinc-900 via-black to-zinc-950 px-3 py-8 text-white">
        <div className="mx-auto max-w-5xl animate-pulse space-y-8">
          <div className="rounded-xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl">
            <div className="border-b border-zinc-700 px-8 pt-8 pb-4">
              <div className="h-9 w-52 rounded bg-zinc-800" />
            </div>
            <div className="space-y-3 px-8 pt-4 pb-8">
              <div className="h-12 w-full rounded-lg bg-zinc-800" />
              <div className="h-24 w-full rounded-lg bg-zinc-800" />
              <div className="h-11 w-full rounded-lg bg-zinc-800" />
            </div>
          </div>

          <div className="mx-auto mt-15 max-w-5xl space-y-8">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-8 w-36 rounded bg-zinc-800" />
              <div className="h-7 w-20 rounded bg-zinc-800" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black backdrop-blur-md">
                <div className="h-6 w-3/4 rounded bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-800" />
                <div className="h-4 w-5/6 rounded bg-zinc-800" />
                <div className="mt-6 h-5 w-full rounded bg-zinc-800" />
              </div>
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black backdrop-blur-md">
                <div className="h-6 w-2/3 rounded bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-800" />
                <div className="h-4 w-2/3 rounded bg-zinc-800" />
                <div className="mt-6 h-5 w-full rounded bg-zinc-800" />
              </div>
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black backdrop-blur-md">
                <div className="h-6 w-1/2 rounded bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-800" />
                <div className="h-4 w-4/5 rounded bg-zinc-800" />
                <div className="mt-6 h-5 w-full rounded bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-auto border-t border-zinc-600 bg-black py-2" />
    </div>
  );
};

export default HomeSkeleton;
