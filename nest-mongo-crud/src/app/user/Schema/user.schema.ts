import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({versionKey: false })
class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  mobileNumber: Number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
