import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Render,
  Redirect,
} from "@nestjs/common";
import { ProgramsService } from "./programs.service";
import { CreateProgramDto } from "./dto/create-program.dto";
import { UpdateProgramDto } from "./dto/update-program.dto";
import { KlassesService } from "src/klasses/klasses.service";
import { LevelsService } from "src/levels/levels.service";

@Controller("programs")
export class ProgramsController {
  constructor(
    private readonly programsService: ProgramsService,
    private readonly klassesService: KlassesService,
    private readonly levelsService: LevelsService,
  ) {}

  @Post()
  @Redirect("/")
  async create(@Body() createProgramDto: CreateProgramDto) {
    const klass = await this.klassesService.findOne(
      Number(createProgramDto.klassId),
    );
    if (!klass) {
      return "クラス不正";
    }
    const level = await this.levelsService.findOne(
      Number(createProgramDto.levelId),
    );
    if (!level) {
      return "レベル不正";
    }
    return this.programsService.create(klass, level, createProgramDto);
  }

  @Get()
  findAll() {
    return this.programsService.findAll();
  }

  @Get(":id")
  @Render("problem")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const program = await this.programsService.findOne(id);
    return { program };
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    return this.programsService.update(id, updateProgramDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.programsService.remove(id);
  }
}
