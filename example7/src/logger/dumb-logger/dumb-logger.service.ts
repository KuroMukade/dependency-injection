import { Injectable } from '@nestjs/common';
import { AbstractLoggerService } from '../abstract-logger';

@Injectable()
export class DumbLoggerService extends AbstractLoggerService {
    error(msg: string): void {}
    info(msg: string): void {}
    warn(msg: string): void {}
}
