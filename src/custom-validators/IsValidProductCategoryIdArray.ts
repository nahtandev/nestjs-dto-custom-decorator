import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  isArray,
  isNumber,
  isNumberString,
} from "class-validator";
import { toNumberValue } from "src/helper";

@ValidatorConstraint({ name: "productCategoriesIds", async: true })
export default class IsValidProductCategoryIdArray
  implements ValidatorConstraintInterface
{
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    return validateCategoriesIds(value);
  }

  defaultMessage(args?: ValidationArguments): string {
    if (!isValidCategoriesIdsFormat(args.value)) {
      return `${args.property} must be an array of numbers or array of string number`;
    }

    return `${args.property} contains invalid category ids `;
  }
}

async function validateCategoriesIds(categoriesIds: string[] | number[]) {
  const dataSource = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ]; // Use a real datasource linked to a database

  return new Promise<boolean>((resolve) => {
    // Asynchrone process verification
    // You can also extract invalids ids and return to user.
    setTimeout(() => {
      resolve(
        isArray(categoriesIds) &&
          categoriesIds.every((categoryId) =>
            dataSource.includes(toNumberValue(categoryId))
          )
      );
    }, 1000);
  });
}

function isValidCategoriesIdsFormat(categoriesIds: any[]) {
  return (
    isArray(categoriesIds) &&
    categoriesIds.every(
      (categoryId) => isNumber(categoryId) || isNumberString(categoryId)
    )
  );
}
