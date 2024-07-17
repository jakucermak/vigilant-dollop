import {
  CommandDescription,
  CommandDto,
  CommandName,
} from "src/app/dto/command.dto";
import { Command } from "src/utils/command";
import { Signature } from "../signature";

export class Clear implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.CLEAR,
      description: CommandDescription.CLEAR,
    };
  }
  execute(content?: string): JSX.Element {
    return <Signature />;
  }
}
