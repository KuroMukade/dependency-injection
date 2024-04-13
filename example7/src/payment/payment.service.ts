import { Inject, Injectable, Scope } from "@nestjs/common";
import { AbstractLoggerService } from "src/logger";

@Injectable({ scope: Scope.REQUEST })
export class PaymentService {
  constructor(private readonly _logger: AbstractLoggerService) {}
  sendMoney() {
    this._logger.info("Info about payment");
    return true;
  }
}
