// import styles from "../styles/EMIPlanCard.module.css";

// const EMIPlanCard = ({ plan, selected, onSelect }) => {
//   return (
//     <div
//       className={`${styles.card} ${selected ? styles.selected : ""}`}
//       onClick={() => onSelect(plan)}
//     >

//       <div className={styles.leftSection}>

//         {/* RADIO BUTTON */}

//         <div className={styles.radio}>
//           {selected && <div className={styles.dot}></div>}
//         </div>

//         {/* EMI TEXT */}

//         <div className={styles.textBlock}>

//           <p className={styles.monthly}>
//             ₹{plan.monthlyPayment.toLocaleString()} x {plan.tenure} months
//           </p>

//           {plan.cashback > 0 && (
//             <p className={styles.cashback}>
//               Additional cashback ₹{plan.cashback.toLocaleString()}
//             </p>
//           )}

//         </div>

//       </div>

//       {/* INTEREST BADGE */}

//       <span className={styles.interestBadge}>
//         {plan.interestRate === 0 ? "0% EMI" : `${plan.interestRate}% interest`}
//       </span>

//     </div>
//   );
// };

// export default EMIPlanCard;

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