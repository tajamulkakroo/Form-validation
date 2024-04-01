import { test, expect } from '@playwright/test';
import { StudentRegistrationPage } from '../src/pages/formPage'
import { formPageFixture as fakeformPageFixture } from '../src/fixtures/formFixture';
import { toHaveValue } from '@testing-library/jest-dom/matchers';

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
  //await expect(page.locator('#mobileNumber')).toHaveValue(fakeValue.mobileNumberLocator);

  
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








 /* await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Tajamul');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Islam');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('tajamulislam.100@gmail.com');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('Mobile Number (10 Digits)').click();
  await page.getByLabel('Mobile Number (10 Digits)').fill('9149479287');
  await page.getByLabel('Date of Birth').fill('2024-04-01');
  await page.getByLabel('Subjects').click();
  await page.getByLabel('Subjects').fill('physics');
  await page.getByLabel('Sports').check();
  await page.getByLabel('Picture').click();
  await page.getByLabel('Picture').setInputFiles('Aadhaar.PNG');
  await page.getByLabel('Current Address').click();
  await page.getByLabel('Current Address').fill('Amda Kadal ');
  await page.getByLabel('State').selectOption('Jammu & Kashmir');
  await page.getByLabel('City').selectOption('Srinagar');
  await page.getByRole('button', { name: 'Submit' }).click();
});*/