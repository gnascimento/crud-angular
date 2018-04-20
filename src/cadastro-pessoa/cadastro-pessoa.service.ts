import { AbstractService } from "../abstract/abstract.service";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class CadastroPessoaService extends AbstractService {
  constructor(private _http: Http) {
    super();
  }

  salvarPessoa(pessoa: any): Observable<any> {
    const endereco = AbstractService.URL_SERVIDOR + "/salvar_pessoa.php";

    const json_pessoa = JSON.stringify(pessoa);

    // const headers = new Headers();
    // headers.append("Content-Type", "application/x-www-form-urlencoded");
    // const urlSearchParams = new URLSearchParams();
    // urlSearchParams.append("json", json_pessoa);
    // const body = urlSearchParams.toString();

    return this._http
      // .post(endereco, body, { headers: headers })
      .post(endereco, json_pessoa)
      .map(data => JSON.parse(data.text()))
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(super.handleError);
  }
}
