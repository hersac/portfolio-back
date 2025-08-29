import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './modules/usuarios/usuarios/usuarios.module';
import { UsuariosModule } from './modules/private/usuarios/usuarios/usuarios.module';
import { UsuariosModule } from './modules/admin/usuarios/usuarios/usuarios.module';
import { ExperienciasService } from './modules/admin/experiencias/experiencias/experiencias.service';
import { ExperienciasModule } from './modules/admin/experiencias/experiencias/experiencias.module';
import { ProyectosModule } from './modules/admin/proyectos/proyectos/proyectos.module';
import { TecnologiasModule } from './modules/admin/tecnologias/tecnologias/tecnologias.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    UsuariosModule,
    ExperienciasModule,
    ProyectosModule,
    TecnologiasModule,
  ],
  controllers: [AppController],
  providers: [AppService, ExperienciasService],
})
export class AppModule {}
