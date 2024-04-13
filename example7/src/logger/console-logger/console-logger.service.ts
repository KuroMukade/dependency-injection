import { Injectable } from "@nestjs/common";
import { AbstractLoggerService } from "../abstract-logger";

@Injectable()
export class ConsoleLoggerService extends AbstractLoggerService {
  error(msg: string): void {
    console.error(msg);
  }
  info(msg: string): void {
    console.info(msg);
  }
  warn(msg: string): void {
    console.warn(msg);
  }
}
 