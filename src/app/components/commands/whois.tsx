"use-client";
import Image from "next/image";
// @ts-ignore
import profilePic from "public/IMG_0905.JPG";
import styles from "@/styles/components/commands/whois.module.scss";
import {
  CommandDescription,
  CommandDto,
  CommandName,
} from "src/app/dto/command.dto";
import { Command } from "src/utils/command";
import { useEffect, useRef, useState } from "react";

const content: string[] = [
  "I began my education at a hotel school in Turnov, but by the third year, I realized it was not the right path for me. My interest in programming started in high school when I began learning Scratch, which sparked a passion for coding.",
  "I quickly progressed to learning Swift, where I explored more complex algorithms, object-oriented programming (OOP), and developed simple mobile applications. Seeking to deepen my skills, I enrolled in Greenfox Academy and graduated as a Python junior developer.",
  "While I feel more comfortable working on back-end development, I am also proficient in front-end technologies. I enjoy experimenting with various technologies, including Docker and CI/CD. My interests lie in creating AI chatbots, web scraping, and I am actively learning NodeJS, React, and TypeScript to enhance my project development skills.",
  "I am enthusiastic about leveraging my diverse skill set to contribute to innovative projects and am eager to bring my passion for technology to a dynamic team.",
];

function WhoisCommand() {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisiblity] = useState(false);
  useEffect(() => {
    if (imgContainerRef.current) {
      if (visible) {
        console.log("visible");
        imgContainerRef.current.classList.add(styles.visible);
      } else {
        console.log("not visible");
        imgContainerRef.current.classList.remove(styles.visible);
      }
    }
  }, [visible]);

  return (
    <div className={styles.container}>
      <h1> Jakub Čermák </h1>
      <h2> junior sw developer </h2>
      <div className={styles.content}>
        <div className={styles["img--container"]} ref={imgContainerRef}>
          <Image
            alt="Picture of Jakub Čermák"
            src={profilePic}
            className={styles.img}
            onLoad={(e) => {
              setVisiblity(true);
            }}
          />
        </div>
        <blockquote className={styles.blockquote}>
          {content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </blockquote>
      </div>
    </div>
  );
}

export class Whois implements Command {
  command: CommandDto;

  constructor() {
    this.command = {
      name: CommandName.WHOIS,
      description: CommandDescription.WHOIS,
    };
  }
  execute(content?: string): JSX.Element {
    return <WhoisCommand />;
  }
}
