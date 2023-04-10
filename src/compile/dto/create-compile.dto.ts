export class CreateCompileDto {
  submissionId!: number;

  exitCode!: number;

  isSuccess!: boolean;

  stdout!: string;

  stderr!: string;
}
