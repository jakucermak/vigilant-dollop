import { Command } from "src/utils/command";
import { CommandDto } from "src/app/dto/command.dto";
import { CommandName } from "src/app/dto/command.dto";
import { CommandDescription } from "src/app/dto/command.dto";
import styles from "@/styles/components/commands/ed.module.scss";

export class Ed implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.ED,
      description: CommandDescription.ED,
    };
  }
  execute(content?: string): JSX.Element {
    return <div className={styles.container}></div>;
  }
}
