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
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(2)
  @Validate(IsUsedUsername)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @Validate(IsUsedEmail)
  email: string;

  @IsNotEmpty()
  @IsArray()
  @Validate(IsValidProductCategoryIdArray)
  productCategoriesIds: number[] | string[];
}
