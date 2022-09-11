import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const HEADING_1 = `We connect accounting and finance freelancers directly with businesses`;
const SECTION_1_PARAGRAPH = "Freelancers get top rates, keep 100% of their earnings while businesses save 20-100% without paying service fees and markups";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Image
      width={720}
      height={534}
      src="/illustration-intro.png"
      alt=""
      objectFit="contain"
      priority
    />
    <h1>
      {HEADING_1}
    </h1>
    <p>
      {SECTION_1_PARAGRAPH}
    </p>
    <a href="#emailForm"><button type="button">Get Started</button></a>
  </section>
);

export default Intro;
