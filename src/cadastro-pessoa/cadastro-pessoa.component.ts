import { Component } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';
import { CadastroPessoaService } from './cadastro-pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent extends AbstractComponent {
  title = 'Cadastro de Pessoas';

  pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: null,
    salario: null
  };

  constructor(private _cadastroPessoaService: CadastroPessoaService) {
    super();
  }

  salvarPessoa() {
    this._cadastroPessoaService
              .salvarPessoa(this.pessoa)
              .subscribe((data) => {
                this.pessoa = data;
                console.log(data);
              }, (error) => {
                console.log(error);
              });
  }

}
