import { CommandDto, CommandName } from "src/app/dto/command.dto";
import { Command } from "src/utils/command";

export default class Contact implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.CC,
      description: "Contact me",
    };
  }
  execute(): JSX.Element {
    return (
      <div>
        <h3>Contact</h3>
      </div>
    );
  }
}
