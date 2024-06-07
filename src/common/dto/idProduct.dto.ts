import { Type } from 'class-transformer';
import { IsNumber, IsPositive, Min } from 'class-validator';

export class IdProductDts {
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Type(() => Number)
  id: number;
}
