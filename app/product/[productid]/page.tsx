import { product } from "@/utils/product";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";



interface IParams {
    productid?: string;
}

const Product = ({ params }: { params: IParams }) => {
    console.log("params", params);
    return (<Container>
        <ProductDetails product={product}></ProductDetails>
    </Container>
    );
}

export default Product;