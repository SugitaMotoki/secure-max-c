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

@Controller("programs")
export class ProgramsController {
  constructor(
    private readonly programsService: ProgramsService,
    private readonly klassesService: KlassesService,
  ) {}

  @Post()
  @Redirect("/")
  async create(@Body() createProgramDto: CreateProgramDto) {
    const klass = await this.klassesService.findOne(Number(createProgramDto.klassId))
    if (!klass) {
      return "授業が間違っています"
    }
    return this.programsService.create(klass, createProgramDto);
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
