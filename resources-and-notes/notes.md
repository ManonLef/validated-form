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
- [x] Add the JS code to check validation during form progress
  - [x] When user leaves field, validate that field
  - [x] email validation
  - [x] zip validation based on country
  - [x] pw validation
  - [x] confirm password validation
- [x] Test all possible cases

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

## 2023-04-24 end of day
- all validation is there
- Some things left to do:
  - [ ] style using `:valid` and `:invalid` (find out if this can be done upon submit only)
  - [x] style it a bit less brutalist
  - [ ] refactor
  - [ ] validate email min characters with JS
  - [ ] check to see if `required` validation is expected to be done in JS as well (is this even accessibility friendly?)

  ## 2023-04-27
  - validation upon submit makes no sense since the form will not submit when invalid. Another option would be on click, but I'll first read through [this article](https://daverupert.com/2017/11/happier-html5-forms/) I found on this to see if it gives me new insights.
  - the assignment tells you to do all validation through JS. I was looking into email for this but then came across [this regex generator](https://www.html5pattern.com/Emails) site for it that tells you not to use a pattern for email, so I'll leave that to the built-in html type email for now. (note: that site is not very accurate, check postal code for The Netherlands for example which accepts SS etc.)

  ## 2023-05-01
  - validation is a bit better on blur. 
  - might want to change the behaviour to return to default class on input for outline/border (remove red box) and error text (back to black unless valid)

  ## 2023-05-04
  - kids holiday so I'm spending smaller bursts of time on this which isn't optimal.
  - [ ] go through the whole code and simplify classes and check for correctness
  - [ ] validate upon submit as well