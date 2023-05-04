import { Product } from "@/types/product";
import Image from "next/image";

interface Props {
  params: {
    id: number;
  };
}

interface APIData {
  store_name: string;
  products: Product[];
}

async function getProducts(id: number) {
  const res = await fetch(`http://0.0.0.0:3000/product/?store_id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function Page({ params }: Props) {
  const data: APIData = await getProducts(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#ff0000] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="BoothLogo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="py-24 w-full">
        <h2 className="text-3xl font-bold text-center">
          {data.store_name} Products
        </h2>
        <div className="py-10 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
          {data.products.map((product: Product) => (
            <div
              key={product.id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full"
            >
              <h3 className={`mb-3 text-xl font-semibold`}>{product.name}</h3>
              <div className="flex flex-col">
                <span>SKU: {product.sku}</span>
                <span>Inventory quantity: {product.inventory_quantity}</span>
                <span>
                  Inventory last updated at: {product.inventory_updated_at}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
