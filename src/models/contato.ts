import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  phone: number,
  nacionalidade: string
}

const UserSchema: Schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: Number, required: true},
  nacionalidade: {type: String, required: true}
})

export default mongoose.model<IUser>('contato', UserSchema);