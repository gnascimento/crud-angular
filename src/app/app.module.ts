import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from '../cadastro-pessoa/cadastro-pessoa.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

/*
  imports PRIME NG
*/
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [
    AppComponent, CadastroPessoaComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ListboxModule,
    KeyFilterModule,
    InputMaskModule,
    ToggleButtonModule,
    AutoCompleteModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    TabViewModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
