import { Controller, Get, Render } from "@nestjs/common";
// import { RegisterService } from './register.service';

@Controller("register")
export class RegisterController {
  // constructor(private readonly registerService: RegisterService) {}

  @Get()
  @Render("register")
  view() {
    return {};
  }
}
