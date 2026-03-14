import styles from "../styles/ProductPage.module.css";

const ProceedButton = ({ selectedPlan }) => {
  return (
    <button
      disabled={!selectedPlan}
      className={styles.button}
    >
      Proceed with selected plan
    </button>
  );
};

export default ProceedButton;