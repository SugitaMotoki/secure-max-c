import { Test, TestingModule } from "@nestjs/testing";
import { ProgramSubmissionsController } from "./program-submissions.controller";
import { ProgramSubmissionsService } from "./program-submissions.service";

describe("ProgramSubmissionsController", () => {
  let controller: ProgramSubmissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramSubmissionsController],
      providers: [ProgramSubmissionsService],
    }).compile();

    controller = module.get<ProgramSubmissionsController>(
      ProgramSubmissionsController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
