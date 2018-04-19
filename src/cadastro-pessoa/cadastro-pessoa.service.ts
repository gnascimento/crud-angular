import { AbstractService } from '../abstract/abstract.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CadastroPessoaService extends AbstractService {
  constructor(private _http: Http) { super(); }

  salvarPessoa(pessoa: any): Observable<any> {
    const endereco = AbstractService.URL_SERVIDOR + '/salvar_pessoa.php';
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({
      headers: headers
    });

    const json_pessoa = JSON.stringify(pessoa);
    const formData = new FormData();
    formData.append('json', json_pessoa);

    return this._http.post(endereco, formData, options)
                      .map((response: Response) => response.json())
                      .do(data => console.log('All: ' + JSON.stringify(data)))
                                    .catch(super.handleError);
  }
}
