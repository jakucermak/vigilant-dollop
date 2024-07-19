import styles from "@/styles/components/commands/prje.module.scss";
import { Command } from "src/utils/command";
import { CommandName } from "src/app/dto/command.dto";
import { CommandDescription } from "src/app/dto/command.dto";
import { CommandDto } from "src/app/dto/command.dto";

enum FormOfCollaboration {
  CTOR = "Contractor",
  EMP = "Full-time employment",
}
interface ProjectProps {
  yearStart: string;
  yearEnd?: string;
  position?: string;
  name: string;
  description: string[];
  collab: FormOfCollaboration;
}

function Project({
  yearStart,
  yearEnd,
  name,
  description,
  collab,
  position,
}: ProjectProps) {
  return (
    <div className={styles.row}>
      <div className={styles.col0}>
        <p className={styles.yr}>{yearStart}</p>
        <p className={styles.yr}>{yearEnd}</p>
        <p className={styles.collab}>{collab}</p>
      </div>
      <div className={styles.col1}>
        <h4>{position}</h4>
        <p className={styles.name}>{name}</p>
        <ul>
          {description.map((desc, idx) => (
            <li key={idx}>
              <p className={styles.desc}>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default class Prje implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.PRJE,
      description: CommandDescription.PRJE,
    };
  }
  execute(content?: string): JSX.Element {
    const projects: ProjectProps[] = [
      {
        yearStart: "2024",
        name: "HUGmarket s.r.o.",
        position: "Python Developer",
        description: [""],
        collab: FormOfCollaboration.CTOR,
      },
      {
        yearStart: "12/2023",
        yearEnd: "7/2024",
        name: "Refsite s.r.o.",
        description: [""],
        position: "Python & NodeJS Dev.",
        collab: FormOfCollaboration.CTOR,
      },
      {
        yearStart: "07/2024",
        yearEnd: "04/2024",
        name: "Digiteq Automotive s.r.o.",
        position: "Test automation & realtime linux specialist",

        description: [
          `Ran and modified test scripts written in TCL for an in-house automation testing framework.`,
          `Assembled and installed Realtime Linux stations operating on Debian with the Xenomai kernel into testing environments.`,
          `Wrote Bash scripts for log cleaning and auto-updating these Linux stations.`,
          `Developed and designed Python scripts and programs for auxiliary tools, such as the Automotive Ethernet Trigger.`,
          `Resolved team issues related to using the GIT version control system.`,
        ],
        collab: FormOfCollaboration.EMP,
      },
    ];
    return (
      <div className={styles.container}>
        <h3>{"Experience"}</h3>
        <ul>
          {projects.map((proj, idx) => (
            <li key={idx}>
              <Project {...proj} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
