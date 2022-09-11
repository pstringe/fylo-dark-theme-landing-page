import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const HEADING_1 = `Freelancers Earn Top Dollar`;
const HEADING_2 = `Comapanies Get Top Talent`
const HEADING_3 = `No Middle Man`

const SECTION_1_PARAGRAPH = "Limber connects companies with financial proffessionals. Contractors keep 100% of their earnings. Companies, get access to top talent";

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
      {`${HEADING_1}, ${HEADING_2}`}
    </h1>
    <h1>
      {HEADING_3}
    </h1>
    <p>
      {SECTION_1_PARAGRAPH}
    </p>
    <a href="#emailForm"><button type="button">Get Started</button></a>
  </section>
);

export default Intro;
