import { ILogger } from "./logger/logger.interface";

export class Context {
  static get logger(): ILogger {
    return this._logger;
  }
  static set(value: ILogger) {
    this._logger = value;
  }
  private static _logger: ILogger
}
