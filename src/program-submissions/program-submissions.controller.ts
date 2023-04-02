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
} from "@nestjs/common";
import { ProgramSubmissionsService } from "./program-submissions.service";
import { CreateProgramSubmissionDto } from "./dto/create-program-submission.dto";
import { UpdateProgramSubmissionDto } from "./dto/update-program-submission.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ProgramSubmission } from "./entities/program-submission.entity";

@Controller("program-submissions")
export class ProgramSubmissionsController {
  constructor(
    private readonly programSubmissionsService: ProgramSubmissionsService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  create(
    @Body() createProgramSubmissionDto: CreateProgramSubmissionDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const programSubmission = new ProgramSubmission();
    programSubmission.userId = createProgramSubmissionDto.userId;
    programSubmission.programId = createProgramSubmissionDto.programId;
    programSubmission.submittedDate = new Date();
    programSubmission.fileName = file.originalname;
    programSubmission.source = file.buffer.toString();
    return this.programSubmissionsService.create(programSubmission);
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
