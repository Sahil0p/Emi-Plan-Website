// import useProducts from "../hooks/useProducts";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";

// import "../styles/layout.css";

// const Home = () => {

//   const { products, loading } = useProducts();

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>

//       <Navbar />

//       <div className="pageContainer">

//         <h1>Smartphones on EMI</h1>

//         <div className="productGrid">

//           {products.map(product => (
//             <ProductCard
//               key={product._id}
//               product={product}
//             />
//           ))}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Home;

import { useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

import "../styles/layout.css";

const Home = () => {

  const { products, loading } = useProducts();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>

      <Navbar />

      <div className="pageContainer">

        <h1>Smartphones on EMI</h1>

        {filteredProducts.length === 0 ? (

          <p className="noProduct">
            No product found
          </p>

        ) : (

          <div className="productGrid">

            {filteredProducts.map(product => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Home;