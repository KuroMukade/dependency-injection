import { AbstractLoggerService } from '../abstract-logger';
export declare class DumbLoggerService extends AbstractLoggerService {
    error(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
}
