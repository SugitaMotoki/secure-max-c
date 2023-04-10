import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Redirect,
  Render,
} from "@nestjs/common";
import { KlassesService } from "./klasses.service";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";

@Controller("klasses")
export class KlassesController {
  constructor(private readonly klassesService: KlassesService) {}

  @Post()
  @Redirect("/klasses")
  create(@Body() createKlassDto: CreateKlassDto) {
    return this.klassesService.create(createKlassDto);
  }

  @Get()
  @Render("resources/klasses")
  async findAll() {
    return {
      items: await this.klassesService.findAll()
    }
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.klassesService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateKlassDto: UpdateKlassDto,
  ) {
    return this.klassesService.update(id, updateKlassDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.klassesService.remove(id);
  }
}
