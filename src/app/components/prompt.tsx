// import styles from "@/styles/components/prompt.module.scss";
import { Host } from "./host";
import { CommandName } from "../dto/command.dto";
import { Command } from "src/utils/command";
import Help from "./commands/help";
import Unknown from "./commands/unknown";
import { Prompt as PromptDto } from "../dto/prompt.dto";
import Contact from "./commands/contact";
import { Whois } from "./commands/whois";
import { Stack } from "./commands/stack";

function getCommand(command: CommandName): Command {
  switch (command) {
    case CommandName.HELP:
      return new Help();
    case CommandName.CC:
      return new Contact();
    case CommandName.WHOIS:
      return new Whois();
    case CommandName.STACK:
      return new Stack();
    default:
      return new Unknown();
  }
}

interface PromptProps {
  prompt: PromptDto;
  clientData: string;
}

export default function Prompt({ prompt, clientData }: PromptProps) {
  return (
    <div style={{ width: "100%" }}>
      <Host hostMachine={clientData} prompt={prompt.prompt} />
      {getCommand(prompt.command.name!).execute(prompt.prompt)}
    </div>
  );
}
