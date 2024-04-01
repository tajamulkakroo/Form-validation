# Dependencies

The following dependencies were utilized:

- [zod](https://github.com/colinhacks/zod): TypeScript-centric schema validation library.
- [react-hook-form](https://react-hook-form.com/): Form handling and validation tool for React.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for React styling.

# Implementation Steps

1. **Creating the Form Component:** Developed a React component named `RegistrationForm.js` responsible for managing form state, validation, and rendering.

2. **Defining the Validation Schema:** Utilized the `zod` library to define a comprehensive validation schema covering fields such as first name, last name, email, gender, mobile number, date of birth, subjects, hobbies, picture, current address, state, and city.

3. **Form Handling and Validation:** Employed the `useForm` hook from `react-hook-form` to manage form state and validation. Utilized the `register` function to bind form fields with the library.

4. **Rendering Form Fields:** Rendered appropriate input elements (text, radio, checkbox, select, textarea) for each form field based on the defined validation schema. Leveraged the `register` function to bind form field values and manage user input.

5. **Displaying Validation Errors:** Implemented error message display based on validation errors retrieved from the `errors` object provided by `react-hook-form`.

6. **Testing:** Developed comprehensive test coverage using the `@testing-library/react` library, including rendering form fields, displaying validation errors for required fields, and handling invalid email addresses.
