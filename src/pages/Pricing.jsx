// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Unlimited city tracking, cloud sync, no ads, secure backups—your
            travels, always organized.
          </p>
        </div>
        <img
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
          className={styles.pageImage}
        />
      </section>
    </main>
  );
}
