import type { ILogger } from "./logger/logger.interface";

import { ConsoleLogger } from "./logger/console-logger";
import { SentryLogger } from "./logger/sentry-logger";

export const logger =
  process.env.NODE_ENV === "PRODUCTION"
    ? new SentryLogger()
    : new ConsoleLogger();

class PaymentService {
  public logger: ILogger;
  constructor() {
    this.logger = new ConsoleLogger(); // default behaver
  }

  sendMoney() {
    this.logger.info("payment succeeded");
    return true;
  }
}

const paymentService = new PaymentService();
paymentService.logger = logger;
paymentService.sendMoney();
