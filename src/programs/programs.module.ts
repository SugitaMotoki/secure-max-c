import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Program } from "./entities/program.entity";
import { ProgramsService } from "./programs.service";
import { ProgramsController } from "./programs.controller";
import { KlassesModule } from "src/klasses/klasses.module";
import { LevelsModule } from "src/levels/levels.module";

@Module({
  imports: [TypeOrmModule.forFeature([Program]), KlassesModule, LevelsModule],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
