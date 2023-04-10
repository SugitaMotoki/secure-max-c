import { Module } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "./entities/course.entity";
import { KlassesModule } from "src/klasses/klasses.module";

@Module({
  imports: [TypeOrmModule.forFeature([Course]), KlassesModule],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
