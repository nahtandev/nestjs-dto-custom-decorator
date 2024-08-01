import { Body, Controller, Post } from "@nestjs/common";
import { AppDto } from "./dto";

@Controller("app")
export class AppController {
  constructor() {}

  @Post()
  async makeProcess(@Body() { username, email, productCategoriesIds }: AppDto) {
    return {
      message: "All data are valid",
      data: { username, email, productCategoriesIds },
    };
  }
}
