import { Injectable } from "@nestjs/common";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Klass } from "./entities/klass.entity";
import { Repository } from "typeorm";

@Injectable()
export class KlassesService {
  constructor(
    @InjectRepository(Klass)
    private readonly klassesRepository: Repository<Klass>,
  ) {}

  async create(createKlassDto: CreateKlassDto) {
    return await this.klassesRepository.save(createKlassDto);
  }

  async findAll() {
    return await this.klassesRepository.find();
  }

  async findOne(id: number) {
    return await this.klassesRepository.findOneBy({ id });
  }

  async update(id: number, updateKlassDto: UpdateKlassDto) {
    return await this.klassesRepository.update(id, updateKlassDto);
  }

  async remove(id: number) {
    return await this.klassesRepository.delete(id);
  }
}
