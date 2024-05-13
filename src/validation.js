export default function validation(values) {
  const errors = {};

  const email_pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const password_pattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  if (values.name === "") {
    errors.name = "Name is required!";
  }
   if (!email_pattern.test(values.email)) {
    errors.email = "Please enter a valid email";
  }
   if (!password_pattern.test(values.password)) {
    errors.password = " A password must be at least 8 characters, including at least one number and includes both lower and uppercase letters and special characters";
  }

  return errors;
}
