import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { Usuario } from './schemas/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>,
  ) {}

  async crear(crearUsuarioDto: CrearUsuarioDto): Promise<Usuario> {
    const { usuarioId, ...usuarioDto } = crearUsuarioDto;

    const nuevoUsuario = new this.usuarioModel({
      ...usuarioDto,
      createdBy: usuarioId,
      updatedBy: usuarioId,
    });
    return await nuevoUsuario.save();
  }

  async buscarTodos() {
    return this.usuarioModel
      .find({ deletedAt: null })
      .sort({ createdAt: -1 })
      .exec();
  }

  async buscarPorId(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`El id ${id} no es válido`);
    }

    const usuario = await this.usuarioModel.findOne({
      _id: id,
      deletedAt: null,
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    return usuario;
  }

  async actualizar(
    id: string,
    actualizarUsuarioDto: ActualizarUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.usuarioModel.findByIdAndUpdate(
      id,
      {
        ...actualizarUsuarioDto,
        updatedBy: actualizarUsuarioDto.usuarioId,
      },
      { new: true },
    );

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return usuario;
  }

  async eliminar(id: string, usuarioId: Types.ObjectId): Promise<Usuario> {
    const usuario = await this.usuarioModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date(), deletedBy: usuarioId },
      { new: true },
    );
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }
}
