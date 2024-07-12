import { CommandDto } from "src/app/dto/command.dto";

export interface Command {
  command: CommandDto;
  execute(content?: string): JSX.Element;
}
