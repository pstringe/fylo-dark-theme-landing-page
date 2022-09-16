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
    title: "On-demand talent platform",
    text: `Swipe, get matched and start chatting right away. Keep it on platform or off. Up to you.`,
  },
  {
    image: "/icon-security.svg",
    title: "Trusted Professionals",
    text: `Professionals are vetted with background checks and it runs continuously when working on project.`,
  },
  {
    image: "/icon-collaboration.svg",
    title: "No Middleman",
    text: `Don't go through a middleman. No longer do you need to pay 20-100% in rate markups or service fees.`,
  },
  {
    image: "/icon-any-file.svg",
    title: "Full project support",
    text: "We handle time logging, invoicing, payment, issuing 1099, project support for a monthly membership fee"
  },
];
