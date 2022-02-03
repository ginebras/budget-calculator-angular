import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from '../../core/models/budgetItem.models';

@Component({
  selector: 'budget-items',
  templateUrl: './budget-items.component.html',
  styleUrls: ['./budget-items.component.scss'],
})
export class BudgetItemsComponent {
  income: Boolean;
  @Input() itemList: Array<BudgetItem> = [];
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  handleDelete(item: BudgetItem) {
    this.deleteItem.emit(item);
  }

  handleUpdate(event: BudgetItem, item: BudgetItem) {
    const bothItems = { event, item };
    this.updateItem.emit(bothItems);
  }
}
