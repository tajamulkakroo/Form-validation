import { Page, Locator } from '@playwright/test';


export class StudentRegistrationPage {
    private readonly page: Page;
    readonly firstNameLocator: Locator;
    readonly lastNameLocator: Locator;
    readonly emailLocator: Locator;
    readonly genderLocator: Locator;
    readonly mobileNumberLocator: Locator;
    readonly DOBLocator: Locator;
    readonly subjectsLocator: Locator;
    readonly hobbiesLocator: Locator;
    readonly pictuteLocator: Locator;
    readonly currentAddressLocator: Locator;
    readonly stateLocator: Locator;
    readonly cityLocator: Locator;
    readonly submitLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameLocator = this.page.locator('#firstName');
        this.lastNameLocator =  this.page.locator('#lastName');
        this.emailLocator = this.page.locator('#email');
        this.mobileNumberLocator = this.page.locator('#mobileNumber');
        this. DOBLocator = this.page.locator('#dateOfBirth');
        this.subjectsLocator = this.page.locator('#subjects');
        this.pictuteLocator = this.page.locator('#picture');
        this.currentAddressLocator = this.page.locator('#currentAddress');
        this.stateLocator = this.page.locator('#state');
        this.cityLocator = this.page.locator('#city');
     }

     async navigateToForm(){

        await this.page.goto('https://react-form-validation-zod.vercel.app/');
        await this.page.waitForLoadState('domcontentloaded');
     }

     async addNameAndEmail(firstName: string, lastName:string, email:string){

        await this.firstNameLocator.click();
        await this.firstNameLocator.fill(firstName);
        await this.lastNameLocator.click();
        await this.lastNameLocator.fill(lastName);
        await this.emailLocator.click();
        await this.emailLocator.fill(email);
     }

     async selectGender(){

        await this.page.getByLabel('Male', { exact: true }).check();
    
    }

    async fillMobileNumber(mobileNumber: number){

        await this.mobileNumberLocator.click();
        await this.mobileNumberLocator.fill(String(mobileNumber));
    }
    
    async addDOB(){

        //await this.DOBLocator.click();
        //await this.DOBLocator.fill(birthDate);

        await this.page.getByLabel('Date of Birth').fill('2024-04-01');
    }

    async addSubjects(subjects: string){

        await this.subjectsLocator.click();
        await this.subjectsLocator.fill(subjects);
    }

    async addHobbies(){

        await this.page.getByLabel('Sports').check();
    }
    async addPicture(){

        await this.pictuteLocator.setInputFiles('./dummyjpg');
    }

    async addAddress(address: string){

        await this.currentAddressLocator.click();
        await this.currentAddressLocator.fill(address);
    }

    async selectState(){

        await this.stateLocator.selectOption('Jammu & Kashmir');
    }
    async selectCity(){

        await this.cityLocator.selectOption('Srinagar');
    }
    async submitForm(){

        await this.page.getByRole('button', { name: 'Submit' }).click();
    
    }
}