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
    return await this.programsRepository.save(createProgramDto);
  }

  async findAll() {
    return await this.programsRepository.find();
  }

  async findOne(id: number) {
    return await this.programsRepository.findOneBy({ id });
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    return await this.programsRepository.update(id, updateProgramDto);
  }

  async remove(id: number) {
    return await this.programsRepository.delete(id);
  }
}
