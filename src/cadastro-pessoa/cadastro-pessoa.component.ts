import { Component } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract.component";
import { CadastroPessoaService } from "./cadastro-pessoa.service";
import { NgSwitchCase } from "@angular/common";
import { MessageService } from 'primeng/components/common/messageservice';
import {ActivatedRoute, Router} from "@angular/router";
import { BuscarPessoaService } from "../buscar-pessoa/buscar-pessoa.service";



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
    dependentes:[]
    //dependentes: [{ "nome": "Maria chiquinha", "cpf": "123456789" }, { "nome": "João do Mato", "cpf": "999888555" }]
  };

  dependenteAdicional = {
    nome: "",
    cpf: ""
  };

  cols_pessoa = [{ "col": "nome", "header": "Nome", "field": "nome", "filterMatchMode" : "contains" }, { "col": "cpf", "header": "CPF", "field": "cpf", "filterMatchMode" : "contains" }];

  displayFrmAddDependente = false;

  showFrmAddDependente() {
    this.displayFrmAddDependente = true;
  }

  constructor(private _cadastroPessoaService: CadastroPessoaService, private _buscarPessoaService: BuscarPessoaService,
      private messageService: MessageService, private activatedRoute: ActivatedRoute, private router: Router) {
    super();
    this.activatedRoute.params.subscribe(p => {
      if(p != null && p.id != null) {
        _buscarPessoaService.buscarCadastroPessoa(p.id).subscribe(data => {
          this.pessoa = data;
          this.pessoa['_id'] = this.pessoa['_id']['$oid'];
        }, error => console.error(error));
      }
    });
  }

  salvarPessoa() {
    if(this.validarFormulario()) {
      this._cadastroPessoaService.salvarPessoa(this.pessoa).subscribe(
        data => {
          this.pessoa = data;
          console.log(data);
          this.messageService.add({ severity: 'success', summary: 'Salvo', detail: 'Salvo com sucesso' });
          this.router.navigate(["./buscar-pessoa"]);
        },
        error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao salvar' });
        }
      );
    }
  }

  validarFormulario() : boolean {
    this.messageService.clear();
    if(this.pessoa.nome == null ||
      this.pessoa.nome.trim() == "" ||
      this.pessoa.cpf == null ||
      this.pessoa.cpf.trim() == "") {
        this.messageService.add({ severity: 'error', summary: 'Dados obrigatórios', detail: 'Informe o nome e o cpf' });
        return false;
      }
    return true;
  }

  adicionarDependente() {
    this.messageService.clear();
    if (this.dependenteAdicional.nome != null && this.dependenteAdicional.nome.trim() != "") {
      this.pessoa.dependentes.push(this.dependenteAdicional);
      this.dependenteAdicional = {
        nome: "",
        cpf: ""
      };
      this.displayFrmAddDependente = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Dados obrigatórios', detail: 'Informe o nome do dependente' });
    }
  }

  voltarParaLista() {
    this.router.navigate(["./buscar-pessoa"]);
  }

  removerDependente(id) {
    this.pessoa.dependentes.splice(id, 1);
  }
}
