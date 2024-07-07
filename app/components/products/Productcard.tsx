"use client";


import { formatPrice } from "@/utils/FormatPrice";
import { Rating } from "@mui/material";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";
import Image from "next/image";



interface ProductCardProps {
    data: any;
}



const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const productRating = data.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) / data.reviews.length;

    const router = useRouter();
    return (
        <article className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-small" onClick={() => router.push(`/product/${data.id}`)}>
            <div className=" flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        fill
                        className="w-full h-full object-contain"
                        src={data.images[0].image}
                        alt={data.name}
                    />
                </div>
                <p className="mt-4 font-medium"> {truncateText(data.name)}</p>
                <Rating name="read-only" value={productRating} readOnly />
                <p>{data.reviews.length} reviews</p>
                <p className="font-semibold">{formatPrice(data.price)}</p>
            </div>
        </article>
    );
}

export default ProductCard;