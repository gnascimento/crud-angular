import { Observable } from 'rxjs/Observable';
export abstract class AbstractService {
  protected static URL_SERVIDOR = 'http://127.0.0.1';

  protected handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.statusText + ' Server error');
  }
}
