import {FormGroup} from '@angular/forms';

export class AppGlobal {
  private static INSTANCE: AppGlobal = new AppGlobal();

  constructor() {
    if (AppGlobal.INSTANCE) {
      throw new Error('Error: Please Use AppGlobal.instance()');
    }
    AppGlobal.INSTANCE = this;
  }

  /**
   *  获取当前Global实例
   */
  public static instance(): AppGlobal {
    return AppGlobal.INSTANCE;
  }

  /**
   * 校验FormGroup值
   */
  public checkForm(formGroup: FormGroup): boolean {
    let result = true;
    for (const i in formGroup.controls) {
      formGroup.controls[i].markAsDirty();
      if (!formGroup.controls[i].valid) {
        result = false;
      }
    }
    return result;
  }

  /**
   * 重置表单状态
   */
  public resetForm(formGroup: FormGroup, reset = false) {
    if (reset) {
      formGroup.reset();
    }
    for (const key in formGroup.controls) {
      formGroup.controls[key].markAsPristine();
    }
  }

  /**
   * 格式化Tree至级联选择器
   */
  convertTree(list: any, value, label): any[] {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const treeNode = {
        label: item[label],
        value: item[value],
        children: null,
        isLeaf: false
      };
      if (item.children && item.children.length > 0) {
        treeNode.children = this.convertTree(item.children, value, label);
      } else {
        treeNode.isLeaf = true;
      }
      result.push(treeNode);
    }
    return result;
  }

  getGuid() {
    return (`${this.random()}${this.random()}-${this.random()}-${this.random()}-${this.random()}-${this.random()}${this.random()}${this.random()}`);
  }

  random(): any {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }


}
