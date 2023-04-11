import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Compile } from "./entities/compile.entity";
import { Repository } from "typeorm";
import { CompileResult } from "./entities/compile-result.entity";
import { CreateCompileDto } from "./dto/create-compile.dto";

@Injectable()
export class CompileService {
  constructor(
    @InjectRepository(Compile)
    private readonly compileRepository: Repository<Compile>,
  ) {}

  async create(
    createCompileDto: CreateCompileDto
  ) {
    const result = await this.execute(createCompileDto.source);
    console.log(result)
    const compile = new Compile();
    compile.isSuccess = result.isSuccess;
    compile.exitCode = result.exitCode;
    compile.stdout = result.stdout;
    compile.stderr = result.stderr;
    return await this.compileRepository.save(compile);
  }

  async findAll() {
    return await this.compileRepository.find({
      relations: ["program-submission"],
    });
  }

  async findOne(id: number) {
    return await this.compileRepository.findOne({
      where: { id },
      relations: ["program-submission"],
    });
  }

  async execute(source: string): Promise<CompileResult> {
    // const flags: string[] = [
    //   "-std=c89",
    //   "-Og",
    //   "-Wall",
    //   "-Wextra",
    //   "-Wpedantic",
    //   "-Wno-unused-result",
    // ]
     
    const compilleResult = new CompileResult();

    // try {
    //   execSync(`echo ${source} > tmp/source.txt`);
    //   const stdout = execSync(`gcc ${source} ${flags}`)
    //   compilleResult.stdout = stdout.toString();
    //   return compilleResult;
    // } catch (error) {
    //   console.log(error)
    //   throw error;
    // }
    source
    return compilleResult;
  }
}
