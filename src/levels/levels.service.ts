import { Injectable } from "@nestjs/common";
import { CreateLevelDto } from "./dto/create-level.dto";
import { UpdateLevelDto } from "./dto/update-level.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Level } from "./entities/level.entity";
import { Repository } from "typeorm";

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private readonly levelsRepository: Repository<Level>,
  ) {}

  async create(createLevelDto: CreateLevelDto) {
    return await this.levelsRepository.save(createLevelDto);
  }

  async findAll() {
    return await this.levelsRepository.find();
  }

  async findOne(id: number) {
    return await this.levelsRepository.findOneBy({ id });
  }

  async update(id: number, updateLevelDto: UpdateLevelDto) {
    return await this.levelsRepository.update(id, updateLevelDto);
  }

  async remove(id: number) {
    return await this.levelsRepository.delete(id);
  }
}
