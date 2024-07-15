import { Command } from "src/utils/command";
import { CommandDto } from "src/app/dto/command.dto";
import { CommandName } from "src/app/dto/command.dto";
import { CommandDescription } from "src/app/dto/command.dto";

export class Stack implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.STACK,
      description: CommandDescription.STACK,
    };
  }
  execute(content?: string): JSX.Element {
    return <div></div>;
  }
}
