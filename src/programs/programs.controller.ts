import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Render,
  Redirect,
} from "@nestjs/common";
import { ProgramsService } from "./programs.service";
import { CreateProgramDto } from "./dto/create-program.dto";
import { UpdateProgramDto } from "./dto/update-program.dto";
import { LevelsService } from "src/levels/levels.service";
import { CoursesService } from "src/courses/courses.service";
import { UsersService } from "src/users/users.service";

@Controller("programs")
export class ProgramsController {
  constructor(
    private readonly programsService: ProgramsService,
    private readonly coursesService: CoursesService,
    private readonly levelsService: LevelsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @Redirect("/programs")
  async create(@Body() createProgramDto: CreateProgramDto) {
    const course = await this.coursesService.findOne(
      Number(createProgramDto.courseId),
    );
    if (!course) {
      return "課不正";
    }
    const level = await this.levelsService.findOne(
      Number(createProgramDto.levelId),
    );
    if (!level) {
      return "レベル不正";
    }
    return this.programsService.create(course, level, createProgramDto);
  }

  @Get()
  @Render("resources/programs")
  async findAll() {
    const courses = await this.coursesService.findAll();
    const levels = await this.levelsService.findAll();
    const programs = await this.programsService.findAll();
    return {
      courses,
      levels,
      items: programs
    };
  }

  @Get(":id")
  @Render("program")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const users = await this.usersService.findAll();
    const program = await this.programsService.findOne(id);
    return {
      users,
      program,
    };
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    return this.programsService.update(id, updateProgramDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.programsService.remove(id);
  }
}
