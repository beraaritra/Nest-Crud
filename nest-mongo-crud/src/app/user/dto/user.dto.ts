export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly mobileNumber: number;
  readonly password: string;
}

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}
