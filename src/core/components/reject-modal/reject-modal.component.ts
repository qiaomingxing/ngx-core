import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppGlobal} from '../../utils/src/global.util';

@Component({
  selector: 'nc-reject-modal',
  template: `
    <nz-modal [nzWrapClassName]="'nc-reject-modal'" [nzContent]="modalContentReject" [nzVisible]="visible"
              [nzTitle]="title" [nzWidth]="width" (nzOnCancel)="visible=false" (nzOnOk)="handleOk()">
      <ng-template #modalContentReject>
        <form nz-form [formGroup]="rejectForm">
          <div nz-form-item nz-row>
            <!--<div nz-form-label nz-col [nzSm]="6" [nzXs]="24">
              <label nz-form-item-required>{{subTitle}}</label>
            </div>-->
            <div nz-form-control nz-col [nzSm]="24" [nzXs]="24" [nzValidateStatus]="getFormControl('inputValue')">
              <nz-input [(ngModel)]="inputValue" [nzType]="'textarea'" [nzRows]="'4'" formControlName="inputValue"
                        [nzPlaceHolder]="'请填写' + subTitle"></nz-input>
              <div nz-form-explain
                   *ngIf="getFormControl('inputValue').dirty&&getFormControl('inputValue').hasError('required')">请填写{{subTitle}}
              </div>
            </div>
          </div>
        </form>
      </ng-template>
    </nz-modal>
  `,
  styleUrls: ['./style/index.less']
})
export class NcRejectModalComponent implements OnInit {
  @Input() width = 400;
  @Input() title = '驳回';
  @Input() subTitle = '驳回原因';
  @Output() onOk = new EventEmitter<any>();
  @Output() visibleChange = new EventEmitter();
  rejectForm: FormGroup; // 表单
  inputValue;
  visibleValue = false;

  constructor(private fb: FormBuilder) {
    this.rejectForm = this.fb.group({
      inputValue: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  @Input()
  set visible(e) {
    AppGlobal.instance().resetForm(this.rejectForm, true);
    this.visibleValue = e;
    this.visibleChange.emit(this.visibleValue);
    if (e) {
      this.inputValue = '';
    }
  }

  get visible() {
    return this.visibleValue;
  }

  handleOk() {
    if (AppGlobal.instance().checkForm(this.rejectForm)) {
      this.onOk.emit(this.inputValue);
    }
  }

  getFormControl(name): any {
    return this.rejectForm.controls[name];
  }

}
