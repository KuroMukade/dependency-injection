import { Context } from "./context";
import { ConsoleLogger } from "./logger/console-logger";
import type { ILogger } from "./logger/logger.interface";
import { SentryLogger } from "./logger/sentry-logger";

const logger =
  process.env.NODE_ENV === "PRODUCTION"
    ? new SentryLogger()
    : new ConsoleLogger();

class PaymentService {
  constructor() {}

  sendMoney() {
    const logger: ILogger = Context.logger;
    logger.info("user payed");
    return true;
  }
}

const paymentService = new PaymentService();
Context.set(logger);
paymentService.sendMoney();
