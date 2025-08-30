import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Usuario extends Document {
  @Prop({ required: true, trim: true })
  nombre: string;

  @Prop({ required: true, trim: true })
  apellido: string;

  @Prop({ required: true, trim: true, lowercase: true, unique: true })
  correo: string;

  @Prop({ required: true, select: false, minlength: 8 })
  clave: string;

  @Prop({ default: true })
  estaActivo: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Usuario' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Usuario' })
  updatedBy: Types.ObjectId;

  @Prop({ default: null })
  deletedAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'Usuario', default: null })
  deletedBy: Types.ObjectId;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
