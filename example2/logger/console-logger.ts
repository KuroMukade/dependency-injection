import { ILogger } from "./logger.interface";

export class ConsoleLogger implements ILogger {
  error(msg: string): void {
    console.error(msg);
  }

  warn(msg: string): void {
    console.warn(msg);
  }

  info(msg: string): void {
    console.log(msg);
  }
}
