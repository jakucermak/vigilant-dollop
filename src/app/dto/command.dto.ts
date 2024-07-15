enum CommandName {
  CC = "cc",
  WHOIS = "whois",
  ED = "ed",
  STACK = "stack",
  CLEAR = "clear",
  HELP = "help",
  UNKNOWN = "unknown",
}

enum CommandDescription {
  CC = "Displays my contact information.",
  WHOIS = "Shows basic information about me.",
  ED = "Show the list of my education and certifications.",
  STACK = "Lists my used technologies and tools.",
  CLEAR = "Clears the console content",
  HELP = "Shows this, displays available commands with description.",

  UNKNOWN = "me_sh: command not found:",
}

export interface CommandDto {
  name?: CommandName;
  description?: CommandDescription | string;
}

export { CommandName, CommandDescription };
