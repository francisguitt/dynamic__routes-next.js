import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/loading";
import baseUrl from "@/app/services/page";
import { Suspense } from "react";

interface PropsId {

    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export default async function InfoId({ id }: PropsId) {
    // const sleep = (ms:number)=> new Promise((resolve)=>setTimeout(resolve, ms));
    const response = await fetch(`${baseUrl.url}/${id}`, { cache: "no-cache" })
    // await sleep(3000);
    const data: PropsId = await response.json();
    return (
        <Suspense fallback={<Loading />}>
            <div className="flex justify-center flex-col items-center mt-36 px-10 max-w-80  shadow-md mx-auto hover:cursor-pointer ">
                <Image src={data.image} width={100} height={100} alt={data.title} className="pb-5" />
                <h1 className="font-bold text-2xl">{data.title}</h1>
                <p>{data.description}</p>
                <p className="text-red-500  font-bold text-2xl py-10">$ {data.price.toFixed(2)}</p>
            </div >
            <Link href="/">Home</Link>
        </Suspense>



    )
}