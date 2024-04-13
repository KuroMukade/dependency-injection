import { ILogger } from "./logger.interface";

export class SentryLogger implements ILogger {
  error(msg: string): void {}
  info(msg: string): void {}
  warn(msg: string): void {}
}
