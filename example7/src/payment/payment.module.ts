import { Module } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { LoggerModule } from "src/logger/logger.module";

@Module({
  providers: [PaymentService],
  imports: [LoggerModule],
})
export class PaymentModule {
  constructor() {}
}
