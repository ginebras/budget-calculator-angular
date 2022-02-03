import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetItem } from '../../core/models/budgetItem.models';

@Component({
  selector: 'item-form',
  templateUrl: 'item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  formBudget: FormGroup;
  @Input() item: BudgetItem;
  @Output() submitValues: EventEmitter<BudgetItem> =
    new EventEmitter<BudgetItem>();

  ngOnInit() {
    this.formBudget = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  addItem() {
    const { amount, description } = this.formBudget.value;
    this.item = { amount, description };
    this.submitValues.emit(this.item);
    this.formBudget.reset();
  }
}
