import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

require("dotenv").config();

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
