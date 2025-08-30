import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { Types } from 'mongoose';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crear(@Body() crearUsuarioDto: CrearUsuarioDto) {
    const usuario = await this.usuariosService.crear(crearUsuarioDto);
    if (!usuario) {
      throw new BadRequestException('No se pudo crear el usuario');
    }
    return usuario;
  }

  @Get()
  async buscarTodos() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    return await this.usuariosService.buscarPorId(id);
  }

  @Put(':id')
  async actualizar(
    @Param('id') id: string,
    @Body() actualizarUsuarioDto: ActualizarUsuarioDto,
  ) {
    return await this.usuariosService.actualizar(id, actualizarUsuarioDto);
  }

  @Delete(':id/delete-by/usuarioId')
  async eliminar(
    @Param('id') id: string,
    @Param('usuarioId') usuarioId: Types.ObjectId,
  ) {
    return await this.usuariosService.eliminar(id, usuarioId);
  }
}
