import { Component } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';

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
    dataNascimento: null
  };

}
