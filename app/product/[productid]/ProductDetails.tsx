"use client";

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetColor from "./SetColor";
import { server } from "typescript";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/Button";

interface ProductDetailsProps {
    product: any;
}



export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedimg: SelectedImgType
    quantity: number;
    price: number;
}

export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2 " />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedimg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    })

    const productRating = product.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) / product.reviews.length;


    const handleColorSelect = useCallback((value: SelectedImgType) => { }, [cartProduct.selectedimg])


    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity === 99) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1 };
        });
    }, [cartProduct])
    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity - 1 };
        });
    }, [cartProduct])


    return (<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>Images</div>
        <div className=" flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
            <div className="flex items-center gap-2">
                <div> <Rating value={productRating} readOnly /></div>
                <div>{product.reviews.length} reviews</div>
            </div>
            <Horizontal />
            <p className="text-justify">{product.description}</p>
            <Horizontal />
            <div className="flex flex-col">
                <div>
                    <span className="font-semibold">CATEGORY:</span>
                    <span> {product.category}</span>
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span>
                    <span> {product.brand}</span>
                </div>
                <div>
                    {product.inStock ? <span className="text-green-500">In Stock</span> : <span className="text-red-500">Out of Stock</span>}
                </div>
                <Horizontal />
                <div>COLOR</div>
                <Horizontal />
                <div><SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} /></div>
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button label="Añadir al carro" onClick={() => { }} />
                </div>
            </div>
        </div>

    </div>);
}

export default ProductDetails;