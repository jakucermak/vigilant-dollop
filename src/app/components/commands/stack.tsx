"use client";
import { Command } from "src/utils/command";
import { CommandDto } from "src/app/dto/command.dto";
import { CommandName } from "src/app/dto/command.dto";
import { CommandDescription } from "src/app/dto/command.dto";
import styles from "@/styles/components/commands/stack.module.scss";
import { useEffect, useRef, useState } from "react";

function SkillTable({
  skillSet,
  tech,
}: {
  skillSet: TechProps[];
  tech: string;
}) {
  return (
    <table>
      <tr>
        <th colSpan={3}>{tech}</th>
      </tr>
      {skillSet.map((tech, idx) => (
        <tr key={idx}>
          <td style={{ width: "100%" }}>
            <div>{renderLevel(tech.level)}</div>
          </td>
          <td>
            <p>&nbsp;</p>
          </td>
          <td style={{ textAlign: "right" }}>
            <p>{tech.name}</p>
          </td>
        </tr>
      ))}
    </table>
  );
}

function renderLevel(level: number): string {
  let initialLevel = level;
  const result: string[] = [];
  while (level > 0) {
    if (level >= 1) {
      result.push("\udb82\uddde");
      level -= 1;
    } else {
      result.push("\udb84\udf95");
      level -= 0.5;
    }
  }
  for (let i = 5 - initialLevel; i >= 1; i--) {
    result.push("\uebb5");
  }
  return result.join(" ");
}

interface TechProps {
  level: number;
  name: string;
}

function FrontEnd() {
  const react: TechProps[] = [
    {
      level: 3,
      name: "TypeScript",
    },
    {
      level: 2,
      name: "React",
    },
    {
      level: 2,
      name: "NextJS",
    },
    {
      level: 1,
      name: "UX/UI Design",
    },
  ];
  return (
    <div className={[styles.table_container, styles.frontEnd].join(" ")}>
      <SkillTable skillSet={react} tech="React" />
    </div>
  );
}

function BackEnd() {
  const nodejs: TechProps[] = [
    {
      level: 3,
      name: "TypeScript",
    },
    {
      level: 3,
      name: "NodeJS",
    },
    {
      level: 2,
      name: "TypeORM",
    },
    {
      level: 3,
      name: "NestJS",
    },
    {
      level: 2,
      name: "ExpressJS",
    },
  ];

  const python: TechProps[] = [
    {
      level: 4,
      name: "Python",
    },
    {
      level: 3,
      name: "Django",
    },
    {
      level: 3,
      name: "FastAPI",
    },
    {
      level: 2,
      name: "SQLAlchemy",
    },
    {
      level: 3,
      name: "BeautifulSoup",
    },
    {
      name: "Celery",
      level: 4,
    },
    {
      level: 3,
      name: "PyTest",
    },
  ];
  return (
    <div className={styles.table_container}>
      <SkillTable skillSet={nodejs} tech="NodeJS" />
      <SkillTable skillSet={python} tech="Python" />
    </div>
  );
}

function VisibleStack({ stack }: { stack: string }) {
  return (
    <div className={styles.stack}>
      {stack === "" ? null : stack === "backend" ? <BackEnd /> : <FrontEnd />}
    </div>
  );
}
interface BarProps {
  selectedStack: (selected: string) => void;
}
function Bar({ selectedStack }: BarProps) {
  const backendRef = useRef<HTMLHeadingElement>(null);
  const frontendRef = useRef<HTMLHeadingElement>(null);
  const [selected, setSelected] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (e.target === backendRef.current && frontendRef.current) {
      setSelected("backend");
      backendRef.current.classList.add(styles.selected);
      frontendRef.current.classList.remove(styles.selected);
    }
    if (e.target === frontendRef.current && backendRef.current) {
      setSelected("frontend");
      frontendRef.current.classList.add(styles.selected);
      backendRef.current.classList.remove(styles.selected);
    }
  };

  useEffect(() => {
    selectedStack(selected);
  }, [selected, selectedStack]);

  return (
    <div className={styles.bar}>
      <h2
        className={styles.h2}
        ref={backendRef}
        onClick={(e) => handleClick(e)}
      >
        Backend
      </h2>
      <h2
        className={styles.h2}
        ref={frontendRef}
        onClick={(e) => handleClick(e)}
      >
        Frontend
      </h2>
    </div>
  );
}
function TechStack() {
  const [selected, setSelected] = useState("");
  const selectedStack = (selectedStack: string) => {
    setSelected(selectedStack);
  };
  return (
    <div>
      <Bar selectedStack={selectedStack} />
      <VisibleStack stack={selected} />
    </div>
  );
}
export class Stack implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.STACK,
      description: CommandDescription.STACK,
    };
  }
  execute(): JSX.Element {
    return (
      <div className={styles.container}>
        <div className={styles.general}>
          <h2 style={{ margin: "0" }}>General</h2>
          <div style={{ display: "flex" }}>
            <h4>{"DevOps &  Automation Tools"}</h4>
            <p>{"Git, GitHub Actions, Docker, Circle CI"}</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>{"Deployment"}</h4>
            <p>{"Heroku, Digital Ocean"}</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>{"Database"}</h4>
            <p>{"PostgreSQL, MySQL"}</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>{"Develeper tools"}</h4>
            <p>{"Zed, Vim, Webstorm, Postman, Terminal, Chrome DevTools"}</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>{"Platforms"}</h4>
            <p>{"MacOS, Linux (Debian/Ubuntu)"}</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>{"Collaboration & Project Management Tools"}</h4>
            <p>{"Jira, Confluence, Slack, Notion"}</p>
          </div>
        </div>
        <TechStack />
      </div>
    );
  }
}
