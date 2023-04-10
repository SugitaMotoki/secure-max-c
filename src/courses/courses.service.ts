import { Injectable } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Klass } from "src/klasses/entities/klass.entity";
import { Course } from "./entities/course.entity";
import { Repository } from "typeorm";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  async create(klass: Klass, createCourseDto: CreateCourseDto) {
    const cource = new Course();
    cource.klass = klass;
    cource.number = createCourseDto.number;
    cource.title = createCourseDto.title;
    return await this.coursesRepository.save(cource);
  }

  async findAll() {
    return await this.coursesRepository.find({ relations: ["klass"] });
  }

  async findOne(id: number) {
    return await this.coursesRepository.findOne({
      where: { id },
      relations: ["klass"],
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.coursesRepository.update(id, updateCourseDto);
  }

  async remove(id: number) {
    return await this.coursesRepository.delete(id);
  }
}
