import { AbstractService } from '../abstract/abstract.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CadastroPessoaService extends AbstractService {
  constructor(private _http: Http) { super(); }

  salvarPessoa(pessoa: any): Observable<any> {
    const endereco = AbstractService.URL_SERVIDOR + '/salvar_pessoa.php';
    const headers = new Headers({'Content-Type': 'application/www-x-form-urlencoded'});
    // const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({
       headers: headers
    });

    const json_pessoa = JSON.stringify(pessoa);
    // const headers = new HttpHeaders({
     // 'Content-Type':  'multipart/form-data'
    // });
    const formData = new URLSearchParams();
    formData.set('json', json_pessoa);
    console.log(formData.get('json'));
    console.log(json_pessoa);

    return this._http.post(endereco, pessoa, { headers: headers })
                      .map((data) => data)
                      .do(data => console.log('All: ' + JSON.stringify(data)))
                                    .catch(super.handleError);
  }
}
