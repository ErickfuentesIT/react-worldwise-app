import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
          className={styles.pageImage}
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWise helps you remember where you’ve been and what you’ve
            lived. Pin every city, add notes and photos, and see your travels
            come to life on a single world map. Keep your memories synced,
            private, and easy to share—so every journey stays with you.
          </p>
          <p>Simple tools to organize a lifetime of journeys.</p>
        </div>
      </section>
    </main>
  );
}
