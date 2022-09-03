import styles from "./challenge-16.module.scss";

export async function getStaticProps() {
  const res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
  const animal = await res.json();

  return {
    props: { animal },
  };
}

export default function Countries({ animal }) {
  return (
    <main className={styles.main}>
      <header>
        <h1>Zoo animal data</h1>
      </header>
      <section>
        <h2>
          Name: <span className={styles.infos}>{animal.name}</span>
        </h2>
        <h3>
          Latin name: <span className={styles.infos}>{animal.latin_name}</span>
        </h3>
        <a href={animal.image_link} target="_blank" rel="noopener noreferrer">
          Animal image link
        </a>
        <h3>
          Animal type:{" "}
          <span className={styles.infos}>{animal.animal_type}</span>
        </h3>
        <h4>
          Habitat: <span className={styles.infos}>{animal.habitat}</span>
        </h4>
        <p>
          Geo range: <span className={styles.infos}>{animal.geo_range}</span>
        </p>
        <p>
          Active time:{" "}
          <span className={styles.infos}>{animal.active_time}</span>
        </p>
        <span>
          Life span: <span className={styles.infos}>{animal.lifespan}</span>
        </span>
        <div>
          <span>
            Length min:{" "}
            <span className={styles.infos}>{animal.length_min.toString()}</span>
          </span>
          <span>
            Length max:{" "}
            <span className={styles.infos}>{animal.length_max.toString()}</span>
          </span>
        </div>
        <div>
          <span>
            Weight min:{" "}
            <span className={styles.infos}>{animal.weight_min.toString()}</span>
          </span>
          <span>
            Weight max:{" "}
            <span className={styles.infos}>{animal.weight_max.toString()}</span>
          </span>
        </div>
        <p>
          Diet: <span className={styles.infos}>{animal.diet}</span>
        </p>
      </section>
    </main>
  );
}
