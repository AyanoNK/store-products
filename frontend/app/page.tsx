import { Store } from "@/types/store";
import Image from "next/image";
import Link from "next/link";

async function getStores() {
  const res = await fetch("http://0.0.0.0:3000/store/", {
    cache: "no-store",
    headers: { "Cache-Control": "no-cache" },
  });
  console.log(res);
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function Home() {
  const stores: Store[] = await getStores();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#ff0000] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="py-24 w-full">
        <h2 className="text-3xl font-bold text-center">Stores</h2>
        <div className="py-10 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
          {stores.map((store: Store) => (
            <Link
              key={store.id}
              href={`/${store.id}`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {store.name}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {store.url}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
