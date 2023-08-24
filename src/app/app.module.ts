
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaClientComponent } from './pizza-client/pizza-client.component';
/* import { GenGrid2Component, GenGrid2Module }from './../../node_modules/gen-grid2/src/public-api'; */
export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData');
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenGrid2Module } from 'gen-grid2';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    PizzaClientComponent
  ],
  providers: [
    // Other providers...
    /* GenGrid2Component,
    AppModule, */
    /* MatDialog, */
    //{ provide:  MAT_MDC_DIALOG_DATA, useValue: {} }, // You may replace {} with the default data for your dialog.
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: PizzaClientComponent },
    ]),
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    GenGrid2Module,
    BrowserAnimationsModule,
    CommonModule,
    /* MatInputModule,
    MatDialogModule,
    MatPaginatorModule, */
    BrowserModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
