

import Products from "@/components/products";
import productsDataTypes from "@/types";
import baseUrl from "./services/page";

async function getData(): Promise<productsDataTypes[]> {
    // const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const response = await fetch(`${baseUrl.url}/products`, {
        // cache: "no-store",
        next: {
            revalidate: 1
        }
    });
    // await sleep(3000);
    return response.json();
}

export default async function HomePage() {

    const data = await getData();

    return (
        <div className="max-w-7xl mx-auto ">
            <div className="grid  px-2 gap-1 sm:drid-cols-1  md:grid-cols-2">
                {data.map((item: productsDataTypes) => (
                    <Products
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}

                    />

                ))}

            </div>
        </div>


    )
}