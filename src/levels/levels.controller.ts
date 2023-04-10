import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  ParseIntPipe,
  Render,
} from "@nestjs/common";
import { LevelsService } from "./levels.service";
import { CreateLevelDto } from "./dto/create-level.dto";
import { UpdateLevelDto } from "./dto/update-level.dto";

@Controller("levels")
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  @Redirect("/levels")
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.levelsService.create(createLevelDto);
  }

  @Get()
  @Render("resources/levels")
  async findAll() {
    return {
      items: await this.levelsService.findAll(),
    };
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.levelsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateLevelDto: UpdateLevelDto,
  ) {
    return this.levelsService.update(id, updateLevelDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.levelsService.remove(id);
  }
}
