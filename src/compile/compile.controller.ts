import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CompileService } from "./compile.service";
import { CreateCompileDto } from "./dto/create-compile.dto";

@Controller("compile")
export class CompileController {
  constructor(
    private readonly compileService: CompileService,
  ) {}

  @Post()
  async create(@Body() createCompileDto: CreateCompileDto) {
    return await this.compileService.create(
      createCompileDto
    );
  }

  @Get()
  findAll() {
    return this.compileService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.compileService.findOne(id);
  }
}
