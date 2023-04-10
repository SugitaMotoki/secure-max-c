import { Module } from "@nestjs/common";
import { CompileService } from "./compile.service";
import { CompileController } from "./compile.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Compile } from "./entities/compile.entity";
import { ProgramSubmissionsModule } from "src/program-submissions/program-submissions.module";

@Module({
  imports: [TypeOrmModule.forFeature([Compile]), ProgramSubmissionsModule],
  controllers: [CompileController],
  providers: [CompileService],
})
export class CompileModule {}
