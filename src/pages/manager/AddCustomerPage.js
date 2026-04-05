import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;

    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.zipCode = faker.location.zipCode()

    this.customersTableLocator = page.locator('.table.table-bordered.table-striped tr').last()

  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/addCust',
    );
  }
   async addNewCustomer(){
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(this.firstName)
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(this.lastName)
    await this.page.getByRole('textbox', { name: 'Post Code' }).fill(this.zipCode)
    await this.page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click()
  }

  async clickCustomerButton(){
    await this.page.getByRole('button', { name: 'Customers' }).click()
  }
  async reloadPage() {
    await this.page.reload();
  }
  async assertFirstNamePresentInLastRaw(){
     await expect(this.customersTableLocator).toContainText(this.firstName)
  }
  async assertLastNamePresentInLastRaw(){
     await expect(this.customersTableLocator).toContainText(this.lastName)
  }
  async assertZipCodePresentInLastRaw(){
     await expect(this.customersTableLocator).toContainText(this.zipCode)
  }
  async assertNoAccountNumberInLastRaw(){
     await expect(this.customersTableLocator.locator('td').nth(3)).toBeEmpty()
  }
  async assertAccountNumberInLastRaw(){
     await expect(this.customersTableLocator.locator('td').nth(3)).not.toBeEmpty()
  }

}
