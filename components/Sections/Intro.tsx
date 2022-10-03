import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";
import Form from "../Form";

const HEADING_1 = `We connect accounting and finance freelancers directly with businesses.`;
const SECTION_1_PARAGRAPH = "We remove the middleman. Freelancers make more. Businesses get the best of the freelancer's work without paying service fees and mark ups.";

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
    <Form />
  </section>
);

export default Intro;
