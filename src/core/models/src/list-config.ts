export class ListConfigModel {
  pageNo = 1;
  pageSize = 10;
  total = 1;
  data = [];
  displayData = [];
  allChecked = false;
  indeterminate = false;
  checkedList = [];
  disabled = true;
  expandDataCache = {};
  url: string;

  constructor(url = '') {
    this.url = url;
  }
}
