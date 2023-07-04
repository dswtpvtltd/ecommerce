import React, { FC } from "react";
import Link from "next/link";
import s from "./Hero.module.css";
import { Container } from "@components/ui";

interface HeroProps {
  headline: string;
  description: string;
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div>
            <p className={s.description}>{description}</p>
            <Link href={"/#"}>
              <a className={s.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
