import { AbstractService } from "../abstract/abstract.service";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class BuscarPessoaService extends AbstractService {
  constructor(private _http: HttpClient) {
    super();
  }

  buscarPessoas(): Observable<any> {
    let endereco = AbstractService.URL_SERVIDOR + "/listar_pessoas.php";
    return this._http
      .get(endereco)
      .map(data => data)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(super.handleError);
  }

  buscarCadastroPessoa(id) {
    let endereco = AbstractService.URL_SERVIDOR + "/buscar_pessoa.php?";
    const params = new URLSearchParams();
    params.append("id", id);
    endereco += params.toString();
    return this._http
      .get(endereco)
      .map(data => data)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(super.handleError);
  }

}
