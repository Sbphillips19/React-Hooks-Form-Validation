// validate function
// pass in the values object
const validateExample = (values) => {
  // initialize errors object
  let errors = {};

  // if errors exist for each field then add them to the errors object

  // First Name Errors
  // This is just saying if name doesn't exist
  if (!values.name) {
    errors.name = "Name is required";
  }

  // Email Error
  // make sure email is correct format using RegEx
  // email is not required so only check if email fits if one is provided
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  // Phone Number Errors
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else if (!values.phone.match(phoneno)) {
    errors.phoneNumber = "Please enter a phone number with 10 digits.  1 not necessary"
  }

  // Date of Birth Errors
  // check to make sure all fields are provided
  // if they are make sure everything else is accurate
  if (!values.dateOfBirthYear) {
    errors.dateOfBirthYear = "Please enter your birth year";
  }
  else if (values.dateOfBirthYear <= 1900 || values.dateOfBirthYear > 2019) {
    errors.dateOfBirthYear = "Please enter a valid year between 1900-2019";
  }

  return errors;
}

export default validateExample;
