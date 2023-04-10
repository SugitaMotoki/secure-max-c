import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Program } from "./entities/program.entity";
import { ProgramsService } from "./programs.service";
import { ProgramsController } from "./programs.controller";
import { LevelsModule } from "src/levels/levels.module";
import { CoursesModule } from "src/courses/courses.module";

@Module({
  imports: [TypeOrmModule.forFeature([Program]), CoursesModule, LevelsModule],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
