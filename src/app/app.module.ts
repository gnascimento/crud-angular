import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CadastroPessoaComponent } from "../cadastro-pessoa/cadastro-pessoa.component";
import { CadastroPessoaService } from "../cadastro-pessoa/cadastro-pessoa.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { BuscarPessoaComponent } from "../buscar-pessoa/buscar-pessoa.component";
import { BuscarPessoaService } from "../buscar-pessoa/buscar-pessoa.service";


/*
  imports PRIME NG
*/
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { ListboxModule } from "primeng/listbox";
import { KeyFilterModule } from "primeng/keyfilter";
import { InputMaskModule } from "primeng/inputmask";
import { ToggleButtonModule } from "primeng/togglebutton";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from "primeng/splitbutton";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { PanelModule } from "primeng/panel";
import { DialogModule } from "primeng/dialog";
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';




@NgModule({
  declarations: [AppComponent, CadastroPessoaComponent, DashboardComponent, BuscarPessoaComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
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
    PanelModule,
    DialogModule,
    GrowlModule,
    ConfirmDialogModule
  ],
  providers: [CadastroPessoaService, BuscarPessoaService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
