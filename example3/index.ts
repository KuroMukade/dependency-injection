import { ConsoleLogger } from "./logger/console-logger";
import type { ILogger } from "./logger/logger.interface";
import { SentryLogger } from "./logger/sentry-logger";

const logger =
  process.env.NODE_ENV === "PRODUCTION"
    ? new SentryLogger()
    : new ConsoleLogger();

class PaymentService {
  constructor() {}

  sendMoney(logger: ILogger) {
    logger.info("payment succeeded");
    return true;
  }
}

const paymentService = new PaymentService();

paymentService.sendMoney(logger);
