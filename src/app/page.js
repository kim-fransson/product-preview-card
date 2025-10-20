import { products } from "@/products";
import ProductCard from "@/components/ProductCard";

import styles from "./page.module.css";
import VisuallyHidden from "@/components/VisuallyHidden";

export default function Home() {
  return (
    <main className={styles.main}>
      <VisuallyHidden as='div'>
        <h1>Our products</h1>
      </VisuallyHidden>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
