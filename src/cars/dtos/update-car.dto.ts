import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}
