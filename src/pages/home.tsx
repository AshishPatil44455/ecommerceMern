import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const addToCartHandler = () => {};
const Home = () => {
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findMore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asdas"
          photo="https://laptopmedia.com/wp-content/uploads/2022/06/1654598710_1710417-680x401.jpg"
          name="Macbook"
          price={232223}
          stock={123}
          handler={addToCartHandler}
        />
        <ProductCard
          productId="asdas"
          photo="https://laptopmedia.com/wp-content/uploads/2022/06/1654598710_1710417-680x401.jpg"
          name="Macbook"
          price={232223}
          stock={123}
          handler={addToCartHandler}
        />
        <ProductCard
          productId="asdas"
          photo="https://laptopmedia.com/wp-content/uploads/2022/06/1654598710_1710417-680x401.jpg"
          name="Macbook"
          price={232223}
          stock={123}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
