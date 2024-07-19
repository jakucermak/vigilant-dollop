import { Command } from "src/utils/command";
import { CommandName } from "src/app/dto/command.dto";
import { CommandDescription } from "src/app/dto/command.dto";
import { CommandDto } from "src/app/dto/command.dto";

export default class Prje implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.PRJE,
      description: CommandDescription.PRJE,
    };
  }
  execute(content?: string): JSX.Element {
    return (
      <div>
        <h1>Prje</h1>
      </div>
    );
  }
}
