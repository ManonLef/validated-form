# Practice Project: Build a form

## Form contents
- Email
- Country
- Zip Code
- Password
- Password Confirmation

## Requirements
- use live inline validation (highlighting and providing a useful error message)
- don't actually submit the form, but do give an error when form has active errors or unfilled required fields
- all of the validation should occur in the JS file
- give the user a high five when the form is valid and submitted/submittable

## Steps laid out
- [x] Set up a blank HTML
- [x] Think about setup before touching the code
  - [x] How would you set up the different form elements
  - [x] What objects and functions will you need
- [x] Write the simple form elements
- [ ] Add the JS code to check validation during form progress
  - [ ] When user leaves field, validate that field
  - [x] email validation
  - [x] zip validation based on country
  - [ ] pw validation
  - [ ] confirm password validation
- [ ] Test all possible cases
- [ ] Style the form using `:valid` and `:invalid` pseudo-classes

## 2023-04-24 notes
- yesterday I did implement the form fields as thought up in [my planning](./planning.jpeg)
- The email validation part and zip got mostly implemented. I spent some extra time on validation feedback. 
- I did add a bit more than just 'when user leaves field it should validate' for practice since I personally find the validation methods used in online forms a frustrating experience and want to learn how to be better. [this seems to be a good resource for lazy vs live validation](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)

## Some handy pw regex:
- `/^[a-z0-9\.@#\$%&]+$/` (only contains letter [a-z] digits[0-9], special characters(@#$%&))

- `/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/` (Minimum 8 characters at least 1 Alphabet and 1 Number)

- `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/` (Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character)

- `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/` (Minimum 8 and Maximum 10 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character)

- `/^[a-zA-Z0-9\s]{7,16}$/` (Minimum length 7 and Maximum length 16 Characters allowed [a–z] [A-Z] [0-9])