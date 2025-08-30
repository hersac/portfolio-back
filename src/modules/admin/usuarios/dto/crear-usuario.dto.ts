import {
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Types } from 'mongoose';

export class CrearUsuarioDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  @IsEmail({}, { message: 'El correo debe ser un correo electrónico válido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  correo: string;

  @MaxLength(12, { message: 'La clave no debe exceder los 12 caracteres' })
  @MinLength(8, { message: 'La clave debe tener al menos 8 caracteres' })
  @IsString({ message: 'La clave debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La clave es obligatoria' })
  clave: string;

  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  @IsOptional()
  estaActivo: boolean;

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
