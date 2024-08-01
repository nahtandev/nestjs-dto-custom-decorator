import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "email", async: true })
export default class IsUsedEmail implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    return validateUserEmail(value);
  }

  defaultMessage(args?: ValidationArguments): string {
    return `${args.property} is already used`;
  }
}

async function validateUserEmail(email: string) {
  const dataSource = [
    "bob@email.com",
    "sponge@email.com",
    "tom@email.com",
    "jerry@email.com",
  ]; // Use a real datasource linked to a database
  return new Promise<boolean>((resolve) => {
    // Asynchrone process verification
    setTimeout(() => {
      resolve(!dataSource.includes(email));
    }, 1000);
  });
}
