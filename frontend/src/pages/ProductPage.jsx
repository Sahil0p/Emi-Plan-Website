import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductBySlug, getEMIPlans } from "../services/api";

import ProductDetails from "../components/ProductDetails";
import VariantSelector from "../components/VariantSelector";
import EMIPlanCard from "../components/EMIPlanCard";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

import styles from "../styles/ProductPage.module.css";

const ProductPage = () => {

  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [plans, setPlans] = useState([]);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const productRes = await getProductBySlug(slug);
        const planRes = await getEMIPlans(slug);

        setProduct(productRes.data);
        setPlans(planRes.data);

        setSelectedVariant(productRes.data.variants[0]);

      } catch (error) {
        console.error(error);
      }

    };

    fetchData();

  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (

    <div className={styles.page}>

      <Navbar />

      <Breadcrumb product={product} />

      <div className={styles.container}>

        {/* LEFT */}

        <div className={styles.leftSection}>

          <ProductDetails
            product={product}
            selectedVariant={selectedVariant}
          />

          <VariantSelector
            variants={product.variants}
            selectedVariant={selectedVariant}
            onSelect={setSelectedVariant}
          />

        </div>

        {/* RIGHT */}

        <div className={styles.card}>

          <h1 className={styles.productTitle}>
            {product.name}
          </h1>

          <p className={styles.variantText}>
            {selectedVariant?.storage} • {selectedVariant?.color}
          </p>

          <p className={styles.price}>
            ₹{product.price.toLocaleString()}
          </p>

          <p className={styles.mrp}>
            ₹{product.mrp.toLocaleString()}
          </p>

          <div className={styles.downPaymentBox}>
            💰 Pay Now <b>₹19 Downpayment</b>
          </div>

          <p className={styles.subtitle}>
            EMI plans backed by mutual funds
          </p>

          <div className={styles.emiList}>

            {plans.map((plan) => (

              <EMIPlanCard
                key={plan._id}
                plan={plan}
                selected={selectedPlan?._id === plan._id}
                onSelect={setSelectedPlan}
              />

            ))}

          </div>

          <p className={styles.emiStart}>
            EMIs starting 3rd Apr
          </p>

          <button
            className={styles.buyButton}
            disabled={!selectedPlan}
          >

            {selectedPlan
              ? `Buy on ${selectedPlan.tenure} months EMI`
              : "Select EMI Plan"}

          </button>

        </div>

      </div>

    </div>

  );

};

export default ProductPage;