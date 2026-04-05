import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.currencyFieldLocator = page.getByTestId('currency')
    this.customerFieldLocator = page.getByTestId('userSelect')
    this.processButton = page.getByRole('button', { name: 'Process' })
    this.customersButton = page.getByRole('button', { name: 'Customers' })
    
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/openAccount',
    );
  }
  async selectDollar(){
    await this.currencyFieldLocator.selectOption('Dollar')
  }
  async hasValueDollar(){
    await expect(this.currencyFieldLocator).toHaveValue('Dollar')
  }
  async selectPound(){
    await this.currencyFieldLocator.selectOption('Pound')
  }
  async hasValuePound(){
    await expect(this.currencyFieldLocator).toHaveValue('Pound')
  }
  async selectRupee(){
    await this.currencyFieldLocator.selectOption('Rupee')
  }
  async hasValueRupee(){
    await expect(this.currencyFieldLocator).toHaveValue('Rupee')
  }
  async selectLastCreatedCustomer(){
    const lastOption = this.customerFieldLocator.locator('option').last()
    const value = await lastOption.getAttribute('value') 
    await this.customerFieldLocator.selectOption(value)
  }
  async clickProcessButton(){
    await this.processButton.click()
  }
  async reloadPage(){
    await this.page.reload()
  }
  async clickCustomersButton(){
    await this.customersButton.click()
  }
  
}
