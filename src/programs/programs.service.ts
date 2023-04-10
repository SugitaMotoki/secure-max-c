import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Program } from "./entities/program.entity";
import { CreateProgramDto } from "./dto/create-program.dto";
import { UpdateProgramDto } from "./dto/update-program.dto";
import { Level } from "src/levels/entities/level.entity";
import { Course } from "src/courses/entities/course.entity";

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private readonly programsRepository: Repository<Program>,
  ) {}

  async create(
    course: Course,
    level: Level,
    createProgramDto: CreateProgramDto,
  ) {
    const program = new Program();
    program.course = course;
    program.level = level;
    program.exerciseNumber = createProgramDto.exerciseNumber;
    program.title = createProgramDto.title;
    program.html = createProgramDto.html;
    return await this.programsRepository.save(program);
  }

  async findAll() {
    return await this.programsRepository.find({
      relations: {
        level: true,
        course: {
          klass: true,
        }
      },
    });
  }

  async findOne(id: number) {
    return await this.programsRepository.findOne({
      where: { id },
      relations: {
        level: true,
        course: {
          klass: true,
        }
      },
    });
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    return await this.programsRepository.update(id, updateProgramDto);
  }

  async remove(id: number) {
    return await this.programsRepository.delete(id);
  }
}
