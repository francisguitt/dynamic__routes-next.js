
import Image from "next/image";

interface imageComponentProps {
    title: string;
    image: string;
}

function ImageComponet({ title, image }: imageComponentProps) {

    return (
        <div >
            <Image
                src={image}
                width={100}
                height={100}
                alt={title} />
        </div>

    )
}
export default ImageComponet;