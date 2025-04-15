import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from "class-validator";
import IsUsedEmail from "./custom-validators/IsUsedEmail";
import IsUsedUsername from "./custom-validators/IsUsedUsername";
import IsValidProductCategoryIdArray from "./custom-validators/IsValidProductCategoryIdArray";

export class AppDto {
  @Validate(IsNotUsedUsername)
  @MaxLength(100)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  username: string;

  
  @Validate(IsNotUsedEmail)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Validate(IsValidProductCategoryIdArray)
  @IsArray()
  @IsNotEmpty()
  productCategoriesIds: number[] | string[];
}
