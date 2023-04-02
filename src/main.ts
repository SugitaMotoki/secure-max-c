import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";
import * as nunjucks from "nunjucks";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const nunjucksEnv = nunjucks.configure([join(__dirname, "..", "views")], {
    autoescape: true,
    watch: true,
    noCache: true,
    express: app,
  });

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.engine("njk", nunjucksEnv.render);
  app.setViewEngine("njk");

  await app.listen(3000);
}
bootstrap();
