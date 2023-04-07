import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Program } from "./entities/program.entity";
import { ProgramsService } from "./programs.service";
import { ProgramsController } from "./programs.controller";
import { KlassesModule } from "src/klasses/klasses.module";

@Module({
  imports: [TypeOrmModule.forFeature([Program]), KlassesModule],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
