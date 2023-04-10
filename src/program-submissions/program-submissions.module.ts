import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProgramSubmission } from "./entities/program-submission.entity";
import { ProgramSubmissionsService } from "./program-submissions.service";
import { ProgramSubmissionsController } from "./program-submissions.controller";
import { UsersModule } from "src/users/users.module";
import { ProgramsModule } from "src/programs/programs.module";
import { CompileModule } from "src/compile/compile.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProgramSubmission]),
    UsersModule,
    ProgramsModule,
    CompileModule,
  ],
  controllers: [ProgramSubmissionsController],
  providers: [ProgramSubmissionsService],
  exports: [ProgramSubmissionsService],
})
export class ProgramSubmissionsModule {}
