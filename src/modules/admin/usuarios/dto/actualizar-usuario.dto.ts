import { IsMongoId, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { CrearUsuarioDto } from './crear-usuario.dto';
import { PartialType } from '@nestjs/mapped-types';
import { Types } from 'mongoose';

export class ActualizarUsuarioDto extends PartialType(CrearUsuarioDto) {
  @MinLength(24, {
    message: 'El id de usuario debe tener al menos 24 caracteres',
  })
  @MaxLength(24, {
    message: 'El id de usuario no debe exceder los 24 caracteres',
  })
  @IsMongoId({ message: 'El id debe tener un formato válido' })
  @IsNotEmpty({ message: 'El id es obligatorio' })
  id: Types.ObjectId;

  @MinLength(24, {
    message: 'El usuarioId de usuario debe tener al menos 24 caracteres',
  })
  @MaxLength(24, {
    message: 'El usuarioId de usuario no debe exceder los 24 caracteres',
  })
  @IsMongoId({ message: 'El usuarioId debe tener un formato válido' })
  @IsNotEmpty({ message: 'El usuarioId es obligatorio' })
  usuarioId: Types.ObjectId;
}
