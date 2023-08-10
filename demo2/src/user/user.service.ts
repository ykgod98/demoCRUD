import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.userRepo.save(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    const data = this.userRepo.find();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto)
    this.userRepo.update({"demo_id": id}, {"demo_name": updateUserDto.demo_name});
    return `This action updates a #${id} user`;
  }
  // userrepo는 typeorm인데.. nest update 말고
  // typeorm 업데이트하는 방법을 검색

  remove(id: number) {
    this.userRepo.delete(id);
    return `This action removes a #${id} user`;
  }
}
