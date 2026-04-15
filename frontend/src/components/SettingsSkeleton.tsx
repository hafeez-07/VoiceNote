const SettingsSkeleton = () => {
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

      <main className="grow bg-linear-to-br from-zinc-900 via-black to-zinc-950 py-8 text-white">
        <div className="mx-auto max-w-5xl animate-pulse px-3">
          <div className="h-8 w-56 rounded bg-zinc-800" />
          <div className="mt-2 h-5 w-80 max-w-full rounded bg-zinc-800" />

          <div className="mt-8 flex flex-col justify-between gap-12 sm:flex-row">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-20 py-5 shadow-lg shadow-black">
              <div className="h-32 w-32 rounded-full bg-zinc-800" />
              <div className="h-6 w-36 rounded bg-zinc-800" />
              <div className="h-5 w-28 rounded bg-zinc-800" />
              <div className="h-5 w-44 rounded bg-zinc-800" />
              <div className="h-11 w-full rounded bg-zinc-800" />
            </div>

            <div className="flex grow flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-10">
              <div className="grid gap-2">
                <div className="h-4 w-20 rounded bg-zinc-800" />
                <div className="h-11 w-full rounded-lg bg-zinc-800" />
              </div>
              <div className="grid gap-2">
                <div className="h-4 w-20 rounded bg-zinc-800" />
                <div className="h-11 w-full rounded-lg bg-zinc-800" />
              </div>
              <div className="grid gap-2">
                <div className="h-4 w-16 rounded bg-zinc-800" />
                <div className="h-11 w-full rounded-lg bg-zinc-800" />
              </div>
              <div className="grid gap-2">
                <div className="h-4 w-10 rounded bg-zinc-800" />
                <div className="h-11 w-full rounded-lg bg-zinc-800" />
              </div>
              <div className="h-11 w-full rounded-lg bg-zinc-800" />
            </div>
          </div>

          <div className="mt-10 rounded border border-red-950 bg-red-900/20 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="h-7 w-40 rounded bg-red-800/70" />
              <div className="h-8 w-28 rounded bg-red-800/70" />
            </div>
            <div className="mt-3 h-5 w-full rounded bg-red-800/60" />
            <div className="mt-2 h-5 w-4/5 rounded bg-red-800/60" />
          </div>
        </div>
      </main>

      <div className="mt-auto border-t border-zinc-600 bg-black py-2" />
    </div>
  );
};

export default SettingsSkeleton;
