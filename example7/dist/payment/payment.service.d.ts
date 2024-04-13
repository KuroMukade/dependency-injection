import { AbstractLoggerService } from "src/logger";
export declare class PaymentService {
    private readonly _logger;
    constructor(_logger: AbstractLoggerService);
    sendMoney(): boolean;
}
