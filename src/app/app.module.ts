import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreinoComponent } from './components/treino/treino.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';
import { NgxMaskModule } from 'ngx-mask';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    TreinoComponent,
    RankingComponent,
    ConfirmationDialogComponent,
    InputFieldComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
