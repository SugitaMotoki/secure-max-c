import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProgramSubmission } from "./entities/program-submission.entity";
import { ProgramSubmissionsService } from "./program-submissions.service";
import { ProgramSubmissionsController } from "./program-submissions.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ProgramSubmission])],
  controllers: [ProgramSubmissionsController],
  providers: [ProgramSubmissionsService],
  exports: [ProgramSubmissionsService],
})
export class ProgramSubmissionsModule {}
