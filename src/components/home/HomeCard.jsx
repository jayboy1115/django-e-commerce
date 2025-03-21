import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className={`col-md-3 ${styles.col}`}>
      <Link to="/products/slug">
        <div className={styles.card}>
          <div className={styles.cardImgWrapper}>
            <img src="" className={styles.cardImgTop} alt="Product Image" />
          </div>
          <div className={styles.cardBody}>
            <h5 className={`${styles.cardTitle} mb-1`}>HP ELitebook G6</h5>
            <h6 className={styles.cardText}>$300</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
