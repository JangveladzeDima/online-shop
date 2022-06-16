import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ["error", "log"],
    })
    const config = new DocumentBuilder().setTitle("shop").setDescription("shop api documentation").setVersion("1.0").addTag("shop").build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("api", app, document)
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    )
    await app.listen(3000)
}

bootstrap().catch(() => bootstrap())
