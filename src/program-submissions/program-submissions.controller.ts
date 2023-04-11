import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Redirect,
} from "@nestjs/common";
import { ProgramSubmissionsService } from "./program-submissions.service";
import { CreateProgramSubmissionDto } from "./dto/create-program-submission.dto";
import { UpdateProgramSubmissionDto } from "./dto/update-program-submission.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { UsersService } from "src/users/users.service";
import { ProgramsService } from "src/programs/programs.service";
import { CompileService } from "src/compile/compile.service";

@Controller("program-submissions")
export class ProgramSubmissionsController {
  constructor(
    private readonly programSubmissionsService: ProgramSubmissionsService,
    private readonly usersService: UsersService,
    private readonly programsService: ProgramsService,
    private readonly compileService: CompileService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  @Redirect("/")
  async create(
    @Body() createProgramSubmissionDto: CreateProgramSubmissionDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    createProgramSubmissionDto.fileName = file.originalname;
    createProgramSubmissionDto.source = file.buffer.toString();
    const user = await this.usersService.findOne(
      createProgramSubmissionDto.userId,
    );
    if (!user) {
      return "ユーザ不正";
    }
    const program = await this.programsService.findOne(
      createProgramSubmissionDto.programId,
    );
    if (!program) {
      return "プログラム不正";
    }
    const compile = await this.compileService.create({ source: createProgramSubmissionDto.source })
    return await this.programSubmissionsService.create(
      user,
      program,
      compile,
      createProgramSubmissionDto,
    );
  }

  @Get()
  findAll() {
    return this.programSubmissionsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.programSubmissionsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateProgramSubmissionDto: UpdateProgramSubmissionDto,
  ) {
    return this.programSubmissionsService.update(
      id,
      updateProgramSubmissionDto,
    );
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.programSubmissionsService.remove(id);
  }
}
