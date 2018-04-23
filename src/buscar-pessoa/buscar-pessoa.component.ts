import { Component } from "@angular/core";
import { AbstractComponent } from "../abstract/abstract.component";
import { BuscarPessoaService } from "./buscar-pessoa.service";
import { NgSwitchCase } from "@angular/common";
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from "@angular/router";
import { ConfirmationService } from 'primeng/api';
import { CadastroPessoaService } from "../cadastro-pessoa/cadastro-pessoa.service";



@Component({
  selector: "app-buscar-pessoa",
  templateUrl: "./buscar-pessoa.component.html",
  styleUrls: ["./buscar-pessoa.component.css"]
})
export class BuscarPessoaComponent extends AbstractComponent {
  title = "Buscar pessoas de Pessoas";

  pessoas = [];

  cols_pessoa = [{ "col": "nome", "header": "Nome", "field": "nome", "filterMatchMode" : "contains" }, { "col": "cpf", "header": "CPF", "field": "cpf", "filterMatchMode" : "contains" }];


  constructor(private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private buscarPessoaService: BuscarPessoaService,
    private cadastroPessoaService: CadastroPessoaService) {
    super();
    //router.navigate(["./cadastro-pessoa"], { queryParams: [ {"id": ""}]});
  }

  ngOnInit() {
    this.buscarPessoaService.buscarPessoas().subscribe((data) =>{
      this.pessoas = data;
    },
    error => {
      console.log(error);
    });
  }

  editarPessoa(id) {
    console.log(id);
    this.router.navigate(["./cadastro-pessoa", {"id": id}]);
  }

  irParaCadastro() {
    this.router.navigate(["./cadastro-pessoa"]);
  }

  excluirPessoa(id) {
    this.messageService.clear();
    this.confirmationService.confirm({
      message: 'Você deseja apagar este registro?',
      header: 'Confirmação',
      icon: 'fa fa-trash',
      accept: () => {
          this.cadastroPessoaService.excluirPessoa(id).subscribe(x => {
            this.buscarPessoaService.buscarPessoas().subscribe((data) =>{
              this.pessoas = data;
              this.messageService.add({severity:'info', summary:'Confirmado', detail:'Registro excluído'});
            },
            error => {
              console.log(error);
            });
          });
      },
      reject: () => {
          //nada acontece feijoada
      }
  });
  }

}