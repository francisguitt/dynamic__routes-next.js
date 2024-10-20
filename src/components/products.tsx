
import { Suspense } from "react";
import productsDataTypes from "@/types";
import ImageComponet from "@/components/ImageComponent";
import Link from "next/link";
import Loading from "./loading";



export default function Products(props: productsDataTypes) {
    const { id, title, description, category, price, image } = props;
    return (
        <div className="flex p-10 ">


            <div key={id} className="flex justify-center items-center flex-col  p-5  mx-auto shadow-xl ">
                <ImageComponet
                    title={title}
                    image={image} />
                <div className="p-0 text-center">
                    <h2 className="font-bold text-2xl text-zinc-200">{title}</h2>
                    <p className=" py-3 text-zinc-100 ">{description}</p>
                    <h2 className="font-bold ">Categoria: <p>{category}</p></h2>
                    <div className="py-6">
                        <Link href={`/productsInfo/${id}`} className="bg-green-400 p-2 rounded-md w-[250px]">Saiba mais</Link>
                    </div>
                </div>
            </div>



        </div>
    )
}