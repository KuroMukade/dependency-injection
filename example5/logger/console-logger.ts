import { injectable } from "inversify";
import 'reflect-metadata'; 

import { ILogger } from "./logger.interface";

@injectable() 
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
