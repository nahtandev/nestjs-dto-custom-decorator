import { isNumber } from "class-validator";

export function toNumberValue(val: any): number {
  const parsedNumber = Number(val);
  if (!isNumber(parsedNumber)) {
    throw new Error("[formatter]: cannot format this value to number");
  }
  return parsedNumber;
}
