import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Program } from "./entities/program.entity";
import { ProgramsService } from "./programs.service";
import { ProgramsController } from "./programs.controller";
import { LevelsModule } from "src/levels/levels.module";
import { CoursesModule } from "src/courses/courses.module";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([Program]), CoursesModule, LevelsModule, UsersModule],
  controllers: [ProgramsController],
  providers: [ProgramsService],
  exports: [ProgramsService],
})
export class ProgramsModule {}
