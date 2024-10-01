import Image from "next/image";
import { Button } from "../../ui/button";

import styles from "../../scss/FamilyOwned.module.scss";

export default function FamilyOwned() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <h1>We are family-owned.</h1>
        <p>
          From the shores of Croatia, Santa Paula Materials is a family run
          company committed to recycling and integrating natural materials
          through function and design.
        </p>
        <div className="justify-start">
          <Button variant="outline" size="default" navigateTo="/about">
            About Us
          </Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/family_owned.png" alt="" width={822} height={529} />
      </div>
    </div>
  );
}
