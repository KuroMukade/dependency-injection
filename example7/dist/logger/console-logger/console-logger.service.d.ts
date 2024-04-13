import { AbstractLoggerService } from "../abstract-logger";
export declare class ConsoleLoggerService extends AbstractLoggerService {
    error(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
}
