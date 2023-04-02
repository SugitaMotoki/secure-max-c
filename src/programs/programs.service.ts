import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Program } from "./entities/program.entity";
import { CreateProgramDto } from "./dto/create-program.dto";
import { UpdateProgramDto } from "./dto/update-program.dto";

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private readonly programsRepository: Repository<Program>,
  ) {}

  async create(createProgramDto: CreateProgramDto) {
    /*
     * Const program = new Program();
     * program.classId = createProgramDto.classId;
     * program.courseNumber = createProgramDto.courseNumber;
     * program.levelId = createProgramDto.courseNumber;
     * program.exerciseNumber = createProgramDto.exerciseNumber;
     */

    // Return await this.programsRepository.save(program);
    return await this.programsRepository.save(createProgramDto);
  }

  async findAll() {
    return await this.programsRepository.find();
  }

  async findOne(id: number) {
    return await this.programsRepository.findOneBy({ id });
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    /*
     * Const program = new Program();
     * program.classId = updateProgramDto.classId!;
     * program.courseNumber = updateProgramDto.courseNumber!;
     * program.levelId = updateProgramDto.courseNumber!;
     * program.exerciseNumber = updateProgramDto.exerciseNumber!;
     */

    // Return await this.programsRepository.update(id, program);
    return await this.programsRepository.update(id, updateProgramDto);
  }

  async remove(id: number) {
    return await this.programsRepository.delete(id);
  }
}
