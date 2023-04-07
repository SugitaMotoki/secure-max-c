import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { ProgramsModule } from "./programs/programs.module";
import { ProgramSubmissionsModule } from "./program-submissions/program-submissions.module";
import { CompileModule } from "./compile/compile.module";
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "securemax",
      database: "securemax",
      autoLoadEntities: true,
      synchronize: true, // 本番使用不可
    }),
    UsersModule,
    ProgramsModule,
    ProgramSubmissionsModule,
    CompileModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
