import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProgramSubmission } from "./entities/program-submission.entity";
import { CreateProgramSubmissionDto } from "./dto/create-program-submission.dto";
import { UpdateProgramSubmissionDto } from "./dto/update-program-submission.dto";
import { User } from "src/users/entities/user.entity";
import { Program } from "src/programs/entities/program.entity";

@Injectable()
export class ProgramSubmissionsService {
  constructor(
    @InjectRepository(ProgramSubmission)
    private readonly programSubmissionsRepository: Repository<ProgramSubmission>,
  ) {}

  async create(
    user: User,
    program: Program,
    createProgramSubmissionDto: CreateProgramSubmissionDto,
  ) {
    const programSubmission = new ProgramSubmission();
    programSubmission.program = program;
    programSubmission.user = user;
    programSubmission.fileName = createProgramSubmissionDto.fileName;
    programSubmission.source = createProgramSubmissionDto.source;

    return await this.programSubmissionsRepository.save(
      createProgramSubmissionDto,
    );
  }

  async findAll() {
    return await this.programSubmissionsRepository.find();
  }

  async findOne(id: number) {
    return await this.programSubmissionsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProgramSubmissionDto: UpdateProgramSubmissionDto,
  ) {
    return await this.programSubmissionsRepository.update(
      id,
      updateProgramSubmissionDto,
    );
  }

  async remove(id: number) {
    return await this.programSubmissionsRepository.delete(id);
  }
}
