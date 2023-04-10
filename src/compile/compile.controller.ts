import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CompileService } from "./compile.service";
import { ProgramSubmissionsService } from "src/program-submissions/program-submissions.service";
import { CreateCompileDto } from "./dto/create-compile.dto";

@Controller("compile")
export class CompileController {
  constructor(
    private readonly compileService: CompileService,
    private readonly programSubmissionsService: ProgramSubmissionsService,
  ) {}

  @Post()
  async create(@Body() createCompileDto: CreateCompileDto) {
    const programSubmission = await this.programSubmissionsService.findOne(
      createCompileDto.submissionId,
    );
    if (!programSubmission) {
      return "提出不正";
    }
    return await this.compileService.create(
      programSubmission,
      createCompileDto,
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
