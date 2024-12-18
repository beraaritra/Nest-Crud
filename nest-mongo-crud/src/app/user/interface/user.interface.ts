/* eslint-disable prettier/prettier */
export interface User extends Document {
  id?: string;
  name: string;
  email: string;
  mobileNumber: number;
  password: string;
  createdAt: Date;
}
