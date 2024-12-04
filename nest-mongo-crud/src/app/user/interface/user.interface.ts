export interface User extends Document {
  id?: string;
  name: string;
  email: string;
  mobileNumber: Number;
  password: string;
  createdAt: Date;
}
