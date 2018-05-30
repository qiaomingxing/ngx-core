import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UploadFile} from 'ng-zorro-antd';

@Component({
  selector: 'nc-upload-wall',
  template: `
    <div class="clearfix nc-upload-wall" [ngClass]="{'only-wall': !isUpload}">
      <nz-upload
        [nzAction]="uploadUrl"
        nzListType="picture-card"
        [(nzFileList)]="_fileList"
        [nzShowButton]="isUpload && _fileList.length < uploadLimit"
        (nzChange)="handleChange($event)"
        [nzPreview]="handlePreview">
        <i class="anticon anticon-plus"></i>
        <div class="ant-upload-text">上传图片</div>
      </nz-upload>
      <nz-modal [nzVisible]="previewVisible" [nzContent]="pictureModalContent" [nzFooter]="null"
                (nzOnCancel)="previewVisible=false">
        <ng-template #pictureModalContent>
          <img [src]="previewImage" [ngStyle]="{ 'width': '100%' }"/>
        </ng-template>
      </nz-modal>
    </div>
  `,
  styleUrls: ['./style/index.less']
})
export class NcUploadWallComponent {
  @Input() isUpload = false; // 是否支持上传，默认不支持
  @Input() uploadLimit = 1; // 上传限制数据量，默认1
  @Input() uploadUrl = ''; // 上传服务器地址
  @Input() fileKey = ''; // 图片显示的url键值
  @Output() onUploadChange = new EventEmitter<any>();
  _fileList = []; // 图片集合
  previewImage = '';
  previewVisible = false;
  _placeholderSrc = 'assets/images/upload.png';

  constructor() {
  }

  @Input()
  set fileList(list: any[]) {
    if (list && list.length > 0) {
      this._fileList = list.filter(value => {
        if (this.fileKey) {
          value.url = value[this.fileKey] ? value[this.fileKey] : this._placeholderSrc;
        }
        value.uid = -1;
        value.name = 'image';
        value.status = 'done';
        if (value.url) {
          return value;
        }
        return false;
      });
    } else {
      this._fileList = [];
    }
  }

  get fileList(): any[] {
    return this._fileList;
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  handleChange({file, fileList}) {
    const status = file.status;
    if (status === 'done') {
      this.onUploadChange.emit(file.response);
    } else if (status === 'error') {
      this.onUploadChange.emit(file.response);
    }
  }

}
