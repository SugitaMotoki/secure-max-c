import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Compile } from "./entities/compile.entity";
import { Repository } from "typeorm";
import { CompileResult } from "./entities/compile-result.entity";
import { CreateCompileDto } from "./dto/create-compile.dto";

// $.verbose = false;

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
    /*
     * const flags: string[] = [
     *   "-std=c89",
     *   "-Og",
     *   "-Wall",
     *   "-Wextra",
     *   "-Wpedantic",
     *   "-Wno-unused-result"
     * ]
     */

    /*
     * try {
     *   await $`echo ${source} > tmp/source.txt`;
     *   await $`gcc ${source} ${flags}`
     *   return true;
     * } catch (error) {
     *   if (error instanceof ProcessOutput) {
     *     return false;
     *   } else {
     *     throw error;
     *   }
     * }
     */
    const compilleResult = new CompileResult();
    compilleResult.isSuccess = false;
    compilleResult.exitCode = 0;
    compilleResult.stdout = source;
    compilleResult.stderr = "";
    return await compilleResult;
  }
}
