import { Container, inject, injectable } from "inversify";
import { ConsoleLogger } from "./logger/console-logger";
import type { ILogger } from "./logger/logger.interface";
import { SentryLogger } from "./logger/sentry-logger";
import "reflect-metadata";

const logger =
  process.env.NODE_ENV === "PRODUCTION"
    ? SentryLogger
    : ConsoleLogger;

@injectable()
class PaymentService {
  constructor(
    @inject("logger") private readonly _logger: ILogger,
    @inject("logger") private readonly _logger2: ILogger,
    @inject("logger") private readonly _logger3: ILogger,
  ) {}

  sendMoney() {
    const logger = this._logger;
    logger.info("dy is my love");
    return true;
  }
}

const myContainer = new Container();

myContainer.bind<ILogger>("logger").to(logger);
myContainer.bind(PaymentService).toSelf();

const paymentService = myContainer.get(PaymentService);

paymentService.sendMoney();
