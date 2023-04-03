import { Test, TestingModule } from "@nestjs/testing";
import { CompileController } from "./compile.controller";
import { CompileService } from "./compile.service";

describe("CompileController", () => {
  let controller: CompileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompileController],
      providers: [CompileService],
    }).compile();

    controller = module.get<CompileController>(CompileController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
