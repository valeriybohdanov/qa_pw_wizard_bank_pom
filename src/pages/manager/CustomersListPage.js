
import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.searchCustomerField = page.getByRole('textbox', { name: 'Search Customer' })

  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }
  async deleteCustomerRaw(){
    await this.page.getByRole('button', { name: 'Delete' }).nth(5).click()
  }
  async isNotPresentCustomerRaw(){
    await expect(this.page.locator('tr.ng-scope').nth(5)).not.toBeVisible()
  }
  async searchCustomerFisrstName(firstName) {
  await this.searchCustomerField.fill(firstName);
  }
  async assertCustomerPresentInTableByFirstName(firstName){
    await expect(this.page.locator('table.table-bordered.table-striped tr.ng-scope').filter({hasText: firstName})).toBeVisible()
  }
  async assertOnlyOneRawPresent(){
    await expect(this.page.locator('table.table-bordered.table-striped tr.ng-scope')).toHaveCount(1)
  }
  async searchCustomerLastName(lastName) {
  await this.searchCustomerField.fill(lastName);
  }
  async assertCustomerPresentInTableByLastName(lastName){
    await expect(this.page.locator('table.table-bordered.table-striped tr.ng-scope').filter({hasText: lastName})).toBeVisible()
  }
  async searchCustomerPostalCode(zipCode){
    await this.searchCustomerField.fill(zipCode.toString())
  }
  async assertCustomerPresentInTableByZip(zipCode){
    await expect(this.page.locator('table.table-bordered.table-striped tr.ng-scope').filter({hasText: zipCode.toString()})).toBeVisible()
  }

}
