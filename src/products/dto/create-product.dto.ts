import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @IsBoolean()
  available: boolean;

  @IsPositive()
  @Min(0)
  @Type(() => Number)
  public price: number;
}
