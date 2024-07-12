import {
  CommandDescription,
  CommandDto,
  CommandName,
} from "src/app/dto/command.dto";
import { Command } from "../../../utils/command";

class Unknown implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.HELP,
      description: CommandDescription.UNKNOWN,
    };
  }
  execute(content: string): JSX.Element {
    return <p>{this.command.description + " " + content}</p>;
  }
}

export default Unknown;
