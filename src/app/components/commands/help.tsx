import {
  CommandDescription,
  CommandDto,
  CommandName,
} from "src/app/dto/command.dto";
import { Command } from "../../../utils/command";
import help from "@/styles/components/commands/help.module.scss";

class Help implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.HELP,
      description: CommandDescription.HELP,
    };
  }
  execute(): JSX.Element {
    const commands: CommandDto[] = Object.values(CommandName)
      .map((name) => {
        return {
          name,
          description:
            CommandDescription[
              Object.keys(CommandDescription)[
                Object.values(CommandName).indexOf(name)
              ] as keyof typeof CommandDescription
            ],
        };
      })
      .filter((command) => command.name !== CommandName.UNKNOWN);

    return (
      <div>
        <p className={help.description}>{this.command.description}</p>
        <table className={help.table}>
          <tbody className={help.body}>
            {commands.map((command) => (
              <tr key={command.name}>
                <td>{command.name}</td>
                <td>&nbsp;</td>
                <td className={help.description}>{command.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Help;
