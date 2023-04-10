import { Module } from "@nestjs/common";
import { CompileService } from "./compile.service";
import { CompileController } from "./compile.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Compile } from "./entities/compile.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Compile])],
  controllers: [CompileController],
  providers: [CompileService],
  exports: [CompileService],
})
export class CompileModule {}
