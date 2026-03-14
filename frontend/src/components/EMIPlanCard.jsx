import styles from "../styles/EMIPlanCard.module.css";

const EMIPlanCard = ({ plan, selected, onSelect }) => {

  return (

    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={() => onSelect(plan)}
    >

      <div className={styles.leftSection}>

        <div className={styles.radio}>
          {selected && <div className={styles.dot}></div>}
        </div>

        <div>

          <p className={styles.monthly}>
            ₹{plan.monthlyPayment.toLocaleString()} x {plan.tenure} months
          </p>

          {plan.cashback > 0 && (
            <p className={styles.cashback}>
              Additional cashback ₹{plan.cashback.toLocaleString()}
            </p>
          )}

        </div>

      </div>

      <span className={styles.interest}>
        {plan.interestRate === 0 ? "0% EMI" : `${plan.interestRate}% interest`}
      </span>

    </div>

  );
};

export default EMIPlanCard;