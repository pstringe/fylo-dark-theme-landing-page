import Image from "next/image";
import { createElement, FC } from "react";
import styles from "@styles/Sections/Features.module.scss";

const Features: FC = () => {
  return (
    <section aria-label="Features" className={styles.main}>
      {elements.map(({ image, text, title }, id) => {
        return (
          <div key={`Feature-${id}`}>
            <Image
              width={75}
              height={75}
              src={image}
              objectFit="contain"
              priority
              alt=""
            />
            {createElement(`h${1 + id}`, null, title)}
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;

const elements = [
  {
    image: "/icon-access-anywhere.svg",
    title: "Talent Platform for Companies and Contractors",
    text: `Advanced Search helps companies to find top-talent, mirco-interaction UI helps freelancers stand out and earn top dollar.`,
  },
  {
    image: "/icon-security.svg",
    title: "Trusted Professionals",
    text: `Our platform is built on trust. We make it easy to verify contractors users and only allow high-quality projects on our platform.`,
  },
  {
    image: "/icon-collaboration.svg",
    title: "Direct Interactions",
    text: `Instead of going though an agency, our platform allows companies and contractors to interact directly, cutting out the middle man`,
  },
  {
    image: "/icon-any-file.svg",
    title: "Get your money's worth",
    text: "Agencies take up to half of what contractors could be earning, no middle-man means more money in your pocket"
  },
];
