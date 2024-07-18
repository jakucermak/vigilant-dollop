import terminal from "@/styles/components/terminal.module.scss";
import { CommandName } from "../dto/command.dto";

interface HostProps {
  hostMachine: string;
  prompt?: string;
}
export function Host({ hostMachine, prompt }: HostProps) {
  if (!prompt) {
    prompt = "";
  }

  const isValidCmd: boolean = Object.values(CommandName).includes(
    prompt as CommandName,
  );
  return (
    <div className={terminal.command}>
      <p className={terminal.host}>{"user@" + hostMachine + ":~$ "}</p>
      <p
        className={[
          terminal.cmd,
          isValidCmd ? terminal.success : terminal.failed_cmd,
        ].join(" ")}
      >
        {prompt}
      </p>
    </div>
  );
}
