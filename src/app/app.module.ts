import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { BudgetItemsComponent } from './components/budget-items/budget-items.component';
import { BudgetItemsCardsComponent } from './components/budget-items/budget-items-cards/budget-items-cards.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    ItemFormComponent,
    BudgetItemsComponent,
    BudgetItemsCardsComponent,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
