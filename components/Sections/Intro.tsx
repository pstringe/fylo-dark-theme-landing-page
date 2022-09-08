import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const HEADING_1 = `Freelancers Earn Top Dollar`;
const HEADING_2 = `Comapanies Get Top Talent`
const HEADING_3 = `No Middle Man`

const SECTION_1_PARAGRAPH = "Limber connects companies with financial proffessionals. As a contractor keep 90%. of your earnings. As a company, get the best talent for your projects.";

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
    <h3>
      {HEADING_1}
    </h3>
    <h3>
      {HEADING_2}
    </h3>
    <h1>
      {HEADING_3}
    </h1>
    <p>
      {SECTION_1_PARAGRAPH}
    </p>
    <button type="button">Get Started</button>
  </section>
);

export default Intro;
