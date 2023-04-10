import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  ParseIntPipe,
  Render,
} from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { KlassesService } from "src/klasses/klasses.service";

@Controller("courses")
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly klassesService: KlassesService,
  ) {}

  @Post()
  @Redirect("/courses")
  async create(@Body() createCourseDto: CreateCourseDto) {
    const klass = await this.klassesService.findOne(
      Number(createCourseDto.klassId),
    );
    if (!klass) {
      return "クラス不正";
    }
    return this.coursesService.create(klass, createCourseDto);
  }

  @Get()
  @Render("resources/courses")
  async findAll() {
    const klasses = await this.klassesService.findAll()
    return {
      klasses: klasses,
      items: await this.coursesService.findAll()
    }
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.coursesService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.coursesService.remove(id);
  }
}
