import { PartialType } from "@nestjs/mapped-types";
import { CreateProgramSubmissionDto } from "./create-program-submission.dto";

export class UpdateProgramSubmissionDto extends PartialType(
  CreateProgramSubmissionDto,
) {}
