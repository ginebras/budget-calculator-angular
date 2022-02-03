import { Component, Output } from '@angular/core';
import { BudgetItem } from '../../core/models/budgetItem.models';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  budgetItems: Array<BudgetItem> = [];
  total: number = 0;

  ngOnInit() {}

  addItems(event: BudgetItem) {
    this.budgetItems.push(event);
    this.handleTotalValue();
  }

  handleDeleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.handleTotalValue();
  }

  handleUpdateItem(item: any) {
    let index = this.budgetItems.indexOf(item.item);
    this.budgetItems[index] = item.event;
    this.handleTotalValue();
  }

  handleTotalValue() {
    this.total = 0;
    this.budgetItems.forEach((i) => (this.total += i.amount));
  }
}
