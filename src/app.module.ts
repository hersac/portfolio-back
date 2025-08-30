import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './modules/admin/usuarios/usuarios.module';
import { ExperienciasModule } from './modules/admin/experiencias/experiencias.module';
import { ProyectosModule } from './modules/admin/proyectos/proyectos.module';
import { TecnologiasModule } from './modules/admin/tecnologias/tecnologias.module';
import { ExperienciasService } from './modules/admin/experiencias/experiencias.service';
import { AutenticacionModule } from './modules/admin/autenticacion/autenticacion.module';

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
    AutenticacionModule,
  ],
  controllers: [],
  providers: [ExperienciasService],
})
export class AppModule {}
