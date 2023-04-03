// import { $, ProcessOutput } from "zx"
import { Injectable } from '@nestjs/common';
import { CompileResult } from './entities/compile-result.entity';

// $.verbose = false;

@Injectable()
export class CompileService {
  async isSuccessful(source: string): Promise<CompileResult> {
    // const flags: string[] = [
    //   "-std=c89",
    //   "-Og",
    //   "-Wall",
    //   "-Wextra",
    //   "-Wpedantic",
    //   "-Wno-unused-result"
    // ]

    // try {
    //   await $`echo ${source} > tmp/source.txt`;
    //   await $`gcc ${source} ${flags}`
    //   return true;
    // } catch (error) {
    //   if (error instanceof ProcessOutput) {
    //     return false;
    //   } else {
    //     throw error;
    //   }
    // }
    const compilleResult = new CompileResult()
    compilleResult.source = source;
    return compilleResult;
  }
}
