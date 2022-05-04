import mongoose from 'mongoose';
import { UserCreateDto } from './UserCreateDto';

export interface userResponseDto extends UserCreateDto {
  _id: mongoose.Schema.Types.ObjectId;
}
