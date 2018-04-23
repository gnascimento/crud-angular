declare var jquery: any;
declare var $: any;
import { Message } from 'primeng/api';

export abstract class AbstractComponent {
  public constructor() {
    $(document).ready(function () {
      $('.mask-data').mask('99/99/9999');
    });
  }
}
