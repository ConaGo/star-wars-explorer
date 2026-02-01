
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Welcome to Star Wars Explorer
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Explore data from the Star Wars universe using the SWAPI.
        </p>
      </main>
    </div>
  );
}
