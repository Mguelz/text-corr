import { IsOptional, IsString, Length } from 'class-validator';

// DTO faz a validação das informações que serão inseridas

// para criar, todas as colunas são obrigatórias
export class CreateFiliacaoDto {
  @IsString()
  @Length(3, 40)
  readonly nome: string;

  @IsString()
  @Length(3, 40)
  readonly endereco: string;

  @IsString()
  @Length(3, 30)
  readonly cidade: string;

  @IsString()
  @Length(3, 30)
  readonly bairro: string;

  @IsString()
  @Length(2, 2)
  readonly uf: string;
}

// todas as colunas são opcionais
export class UpdateFiliacaoDto {
  @IsOptional()
  @IsString()
  @Length(3, 40)
  readonly nome: string;

  @IsOptional()
  @IsString()
  @Length(3, 40)
  readonly endereco: string;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  readonly cidade: string;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  readonly bairro: string;

  @IsOptional()
  @IsString()
  @Length(2, 2)
  readonly uf: string;
}
