import { products } from "@/products";
import ProductCard from "@/components/ProductCard";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
