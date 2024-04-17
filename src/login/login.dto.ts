import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

// para criar, todas as colunas são obrigatórias
export class CreateLoginDto {
  @IsEmail()
  @Length(5, 40)
  readonly email: string;

  @IsString()
  @Length(8, 40)
  readonly senha: string;

  @IsString()
  @Length(6, 30)
  readonly nome: string;
}

// para criar, todas as colunas são obrigatórias
export class UpdateLoginDto {
  @IsEmail()
  @Length(5, 40)
  readonly email: string;

  @IsOptional()
  @IsString()
  @Length(6, 30)
  readonly nome: string;
}
