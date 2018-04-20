import { Component } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract.component";
import { CadastroPessoaService } from "./cadastro-pessoa.service";
import { NgSwitchCase } from "@angular/common";

@Component({
  selector: "app-cadastro-pessoa",
  templateUrl: "./cadastro-pessoa.component.html",
  styleUrls: ["./cadastro-pessoa.component.css"]
})
export class CadastroPessoaComponent extends AbstractComponent {
  title = "Cadastro de Pessoas";

  pessoa = {
    nome: "",
    cpf: "",
    dataNascimento: null,
    salario: null,
    dependentes: [{ "nome": "Maria chiquinha", "cpf": "123456789"}, { "nome": "João do Mato", "cpf": "999888555"}]
  };

  dependenteAdicional = {
    nome: "",
    cpf: ""
  };

  cols_pessoa = [{ "col": "nome", "header": "Nome", "field": "nome"}, {"col": "cpf", "header": "CPF", "field": "cpf"}];

  displayFrmAddDependente = false;

  showFrmAddDependente() {
      this.displayFrmAddDependente = true;
  }

  constructor(private _cadastroPessoaService: CadastroPessoaService) {
    super();
  }

  salvarPessoa() {
    this._cadastroPessoaService.salvarPessoa(this.pessoa).subscribe(
      data => {
        this.pessoa = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
