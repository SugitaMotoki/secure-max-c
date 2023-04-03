import { Body, Controller, Get, Post } from "@nestjs/common";
import { CompileService } from "./compile.service";

@Controller("compile")
export class CompileController {
  constructor(private readonly compileService: CompileService) {}

  @Get()
  compile() {
    return "compile";
  }

  @Post()
  async compileCheck(@Body() source: string) {
    return await this.compileService.isSuccessful(source);
  }
}
