import { Module } from "@nestjs/common";
import { ConsoleLoggerService } from "./console-logger/console-logger.service";
import { DumbLoggerService } from "./dumb-logger/dumb-logger.service";
import { AbstractLoggerService } from "./abstract-logger";

@Module({
  providers: [
    ConsoleLoggerService,
    DumbLoggerService,
    {
      provide: AbstractLoggerService,
      useFactory: (consoleLogger, dumbLogger) => {
        return process.env.NODE_ENV === "production"
          ? dumbLogger
          : consoleLogger;
      },
      inject: [ConsoleLoggerService, DumbLoggerService],
    },
  ],
  exports: [AbstractLoggerService],
})
export class LoggerModule {}
