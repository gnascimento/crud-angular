declare var jquery: any;
declare var $: any;
export abstract class AbstractComponent {
  public constructor() {
    $(document).ready(function() {
      $('.mask-data').mask('99/99/9999');
    });
  }
}
