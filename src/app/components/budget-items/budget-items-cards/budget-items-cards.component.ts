import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BudgetItem } from '../../../core/models/budgetItem.models';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'budget-items-cards',
  templateUrl: './budget-items-cards.component.html',
  styleUrls: ['./budget-items-cards.component.scss'],
})
export class BudgetItemsCardsComponent {
  @Input() income: Boolean;
  @Input() item: BudgetItem;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateItem: EventEmitter<any> = new EventEmitter<any>();
  closeResult: string;
  updateForm: FormGroup;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.updateForm = new FormGroup({
      amount: new FormControl(this.item.amount, [Validators.required]),
      description: new FormControl(this.item.description, [
        Validators.required,
      ]),
    });
  }

  handleDeleteClicker() {
    this.deleteItem.emit();
  }

  activateUpdate() {
    const { amount, description } = this.updateForm.value;
    const updatedItem = { amount, description };
    this.updateItem.emit(updatedItem);
  }

  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
