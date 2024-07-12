"use client";
import styles from "@/styles/components/terminal.module.scss";
import { useEffect, useRef, useState } from "react";
import { Host } from "./host";

interface TerminalProps {
  isSelected: boolean;
  host: string;
  onBlur: () => void;
  onEnter: (value: string) => void;
}

export function Input({ isSelected, host, onBlur, onEnter }: TerminalProps) {
  let [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSelected && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSelected]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter(value);
      setValue("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [value]);

  return (
    <div className={styles.input}>
      <Host hostMachine={host} />
      <div id={styles.input}>
        <p>{value}</p>
        <span className={styles.box}>&nbsp;</span>
      </div>
      <input
        ref={inputRef}
        id={styles.cmd}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    </div>
  );
}
