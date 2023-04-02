import { Test, TestingModule } from "@nestjs/testing";
import { ProgramSubmissionsService } from "./program-submissions.service";

describe("ProgramSubmissionsService", () => {
  let service: ProgramSubmissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramSubmissionsService],
    }).compile();

    service = module.get<ProgramSubmissionsService>(ProgramSubmissionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
