import { IsNumber , IsString, IsOptional } from "class-validator"

export class CreateUserDto {
    @IsNumber()
    demo_id: number;

    @IsString()
    demo_name: string;

    @IsOptional() // db엔 저장되진 않아도 변수 등에 활용 가능
    @IsNumber()
    demo_age: number;
}
