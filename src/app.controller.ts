import { Controller, Get, Render } from "@nestjs/common";
// Import { AppService } from './app.service';

@Controller()
export class AppController {
  // Constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index")
  root() {
    return {};
  }
}
