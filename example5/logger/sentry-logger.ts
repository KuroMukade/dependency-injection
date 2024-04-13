import { injectable } from "inversify";
import { ILogger } from "./logger.interface";
import "reflect-metadata";

@injectable()
export class SentryLogger implements ILogger {
  error(msg: string): void {}
  info(msg: string): void {}
  warn(msg: string): void {}
}
