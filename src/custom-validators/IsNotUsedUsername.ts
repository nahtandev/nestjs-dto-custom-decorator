import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "username", async: true })
export default class IsUsedUsername implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    return validateUsername(value);
  }

  defaultMessage(args?: ValidationArguments): string {
    return `${args.property} is already used`;
  }
}

async function validateUsername(username: string) {
  const dataSource = ["bob", "sponge", "tom", "jerry"]; // Use a real datasource linked to a database
  return new Promise<boolean>((resolve) => {
    // Asynchrone process verification
    setTimeout(() => {
      resolve(!dataSource.includes(username));
    }, 1000);
  });
}
