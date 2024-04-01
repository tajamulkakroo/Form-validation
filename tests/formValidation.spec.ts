import { test, expect } from '@playwright/test';
import { StudentRegistrationPage } from '../src/pages/formPage'
import { formPageFixture as fakeformPageFixture } from '../src/fixtures/formFixture';


const fakeValue = {
  ...fakeformPageFixture(),
};

test('test', async ({ page }) => {

  const studentRegistrationPage = new StudentRegistrationPage(page);
  await studentRegistrationPage.navigateToForm();
  await expect(page).toHaveURL('https://react-form-validation-zod.vercel.app/');

  await  studentRegistrationPage.addNameAndEmail(fakeValue.firstNameLocator,fakeValue.lastNameLocator, fakeValue.emailLocator);
  await expect(page.locator('#firstName')).toHaveValue(fakeValue.firstNameLocator);
  await expect(page.locator('#lastName')).toHaveValue(fakeValue.lastNameLocator);
  await expect(page.locator('#email')).toHaveValue(fakeValue.emailLocator);


  await studentRegistrationPage.selectGender();


  await studentRegistrationPage.fillMobileNumber(fakeValue.mobileNumberLocator);
  

  
  await studentRegistrationPage.addDOB();
  await expect(page.locator('#dateOfBirth')).toHaveValue('2024-04-01');

  
  await studentRegistrationPage.addSubjects(fakeValue.subjectsLocator);
  await expect(page.locator('#subjects')).toHaveValue(fakeValue.subjectsLocator);

  await studentRegistrationPage.addHobbies();


  await studentRegistrationPage.addPicture();

  
  await studentRegistrationPage.addAddress(fakeValue.currentAddressLocator);
  await expect(page.locator('#currentAddress')).toHaveValue(fakeValue.currentAddressLocator);


  await studentRegistrationPage.selectState();

  await studentRegistrationPage.selectCity();

  await studentRegistrationPage.submitForm();


});








