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

export class Whois implements Command {
  command: CommandDto;
  private content: string[] = [
    "I studied at a hotel school in Turnov, but in the third year, I knew it would not be the right fit for me.",
    "During high school, I lightly learned to program in the Scratch language.",
    "That's how my hobby started. I moved on to the Swift language.",
    "In Swift, I tried some more complex algorithms, started with OOP, and simple mobile applications.",
    "Then I enrolled in Greenfox Academy, which I graduated from as a Python junior developer.",
    "I feel more comfortable in back-end, but not scared with frontend. I enjoy trying different technologies, such as Docker, CI/CD.",
    "I am interested in creating AI chatbots (ChatGPT), web scraping (to train some GPTs), and learning NodeJS, React, and TypeScript, which were used to build this project.",
  ];
  constructor() {
    this.command = {
      name: CommandName.WHOIS,
      description: CommandDescription.WHOIS,
    };
  }
  execute(content?: string): JSX.Element {
    return (
      <div className={styles.container}>
        <h1> Jakub Čermák </h1>
        <h2> junior sw developer </h2>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image
              alt="Picture of Jakub Čermák"
              src={profilePic}
              className={styles.img}
            />
          </div>
          <blockquote className={styles.blockquote}>
            {this.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </blockquote>
        </div>
      </div>
    );
  }
}
