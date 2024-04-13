import { ILogger } from "./ILogger.interface";
export declare abstract class AbstractLoggerService implements ILogger {
    abstract error(msg: string): void;
    abstract info(msg: string): void;
    abstract warn(msg: string): void;
}
