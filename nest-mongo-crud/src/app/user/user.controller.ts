import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interface/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create a user
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // Get all users
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Get a user by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  // Update a user by ID
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  // Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.userService.remove(id);
  }
}
