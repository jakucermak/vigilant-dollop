"use client";
import styles from "@/styles/components/terminal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CommandDto, CommandName } from "../dto/command.dto";
import { Prompt as PromptDto } from "../dto/prompt.dto";
import Prompt from "./prompt";
import { Input } from "./input";

function getCommandName(cmdName: string): CommandName {
  switch (cmdName.trim()) {
    case "help":
      return CommandName.HELP;
    case "cc":
      return CommandName.CC;
    case "whois":
      return CommandName.WHOIS;
    case "stack":
      return CommandName.STACK;
    case "clear":
      return CommandName.CLEAR;
    default:
      return CommandName.UNKNOWN;
  }
}

function createPrompt(prompt: string): PromptDto {
  return {
    command: {
      name: getCommandName(prompt),
    },
    prompt: prompt,
  };
}

function getHost() {
  const userAgent = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    // Detekce iOS zařízení
    return "iPhone";
  } else if (/android/i.test(userAgent)) {
    // Detekce Android zařízení
    return "android";
  } else if (/Macintosh|Mac/.test(userAgent)) {
    // Detekce Mac OS
    return "macintosh";
  } else if (/Windows/.test(userAgent)) {
    // Detekce Windows OS
    return "windows";
  } else {
    return "unknown";
  }
}

let history: CommandDto[] = [];

interface TerminalProps {
  isSelected: boolean;
}

export default function Terminal({ isSelected }: TerminalProps) {
  const [prompts, setPrompts] = useState([createPrompt("help")] as PromptDto[]);
  const [clientData, setClientData] = useState("unknown");
  const [focus, setFocus] = useState(isSelected);
  const list_wrapperRef = useRef<HTMLDivElement>(null);
  const lastItemRef: any = useRef(null);
  const [lastPromptHeight, setLastPromptHeight] = useState(0);

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  useEffect(() => {
    const data = getHost();

    setClientData(data);
  }, []);

  useEffect(() => {
    setFocus(isSelected);
  }, [isSelected]);

  const handleEnter = (value: string) => {
    const prompt = createPrompt(value);
    if (prompt.command.name === CommandName.CLEAR) {
      setPrompts([]);
      return;
    }
    setPrompts((prev) => [...prev, prompt]);
  };

  useEffect(() => {
    if (list_wrapperRef.current) {
      if (prompts.length !== 0) {
        setLastPromptHeight(lastItemRef.current.clientHeight);
        list_wrapperRef.current.scrollTo({
          top: list_wrapperRef.current.scrollHeight - lastPromptHeight,
          behavior: "smooth",
        });
      }
    }
  }, [prompts, lastPromptHeight]);

  return (
    <div className={styles.container} onClick={() => handleFocus()}>
      <div className={styles.list_wrapper} ref={list_wrapperRef}>
        <ul style={{ padding: "0" }}>
          {prompts.map((prompt, index) => {
            const isLastPrompt = index === prompts.length - 1;
            return (
              <li key={index} ref={isLastPrompt ? lastItemRef : null}>
                <div
                  className={
                    prompt.command.name == "unknown" ? styles.failed : ""
                  }
                >
                  <div className={styles.prompt}>
                    <Prompt prompt={prompt} clientData={clientData} />
                  </div>
                  <hr className={styles.hr} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Input
          isSelected={focus}
          host={clientData}
          onBlur={handleBlur}
          onEnter={handleEnter}
        />
      </div>
    </div>
  );
}
