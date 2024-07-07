import HomeBanner from "./components/HomeBanner";
import Container from "./components/Container";
import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./components/products/Productcard";



export default function Home() {
  return (
    <div>
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {products.map(
            (product: any) => {
              return <ProductCard data={product} key={product.id} />;
            })}
        </div>
      </Container>
    </div>
  )
}
