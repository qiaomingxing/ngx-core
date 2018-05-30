import {FormControl} from '@angular/forms';

// 正则：手机号
const REG_MOBILE = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
// 正则：电话号码
const REGEX_TEL = /^0\\d{2,3}[- ]?\\d{7,8}/;
// 正则：15位身份证号
const REGEX_ID_CARD15 = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
// 正则：18位身份证号
const REGEX_ID_CARD18 = /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9Xx])$/;
// 正则：邮箱
const REGEX_EMAIL = /^[a-z0-9\u4e00-\u9fa5]+([._\\-]*[a-z0-9\u4e00-\u9fa5])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
// ^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$ ^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$
// 正则：URL
// const REGEX_URL = '[a-zA-z]+://[^\\s]*';
const REGEX_URL = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
// 正则：汉字
const REGEX_ZH = /^[\\u4e00-\\u9fa5]+$/;
// 正则：用户名，取值范围为 a-z,A-Z,0-9,"_",汉字，不能以"_"结尾,用户名必须是 6-20 位
const REGEX_USERNAME = '^[\\w\\u4e00-\\u9fa5]{6,20}(?<!_)$';
// 正则：yyyy-MM-dd 格式的日期校验，已考虑平闰年
const REGEX_DATE = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
// 正则：IP 地址
const REGEX_IP = /((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)/;
// 正则：双字节字符(包括汉字在内)
const REGEX_DOUBLE_BYTE_CHAR = /[^\\x00-\\xff]/;
// 正则：空白行
const REGEX_BLANK_LINE = /\\n\\s*\\r/;
// 正则：QQ 号
const REGEX_TENCENT_NUM = /[1-9][0-9]{4,}/;
// 正则：中国邮政编码
const REGEX_ZIP_CODE = /[1-9]\\d{5}(?!\\d)/;
// 正则：正整数
const REGEX_POSITIVE_INTEGER = /^[1-9]\\d*$/;
// 正则：负整数
const REGEX_NEGATIVE_INTEGER = /^-[1-9]\\d*$/;
// 正则：整数
const REGEX_INTEGER = /^-?[1-9]\\d*$/;
// 正则：非负整数(正整数 + 0)
const REGEX_NOT_NEGATIVE_INTEGER = /^[1-9]\\d*|0$/;
// 正则：非正整数（负整数 + 0）
const REGEX_NOT_POSITIVE_INTEGER = /^-[1-9]\\d*|0$/;
// 正则：正浮点数
const REGEX_POSITIVE_FLOAT = /^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$/;
// 正则：负浮点数
const REGEX_NEGATIVE_FLOAT = /^-[1-9]\\d*\\.\\d*|-0\\.\\d*[1-9]\\d*$/;
// 正则：首字母大写
const REGEX_FIRST_UPPERCASE = /^[A-Z]{1}$/;

/**
 * 手机号正则验证
 */
export const mobileValidator = (control: FormControl): { [key: string]: boolean } => {
  if (!control.value) {
    return {required: true};
  } else if (!REG_MOBILE.test(control.value)) {
    return {mobile: true, error: true};
  }
};

/**
 * 手机号(除空外)正则验证
 */
export const mobileEmptyValidator = (control: FormControl): { [key: string]: boolean } => {
  if (control.value && !REG_MOBILE.test(control.value)) {
    return {mobile: true, error: true};
  }
};

/**
 * 邮箱正则验证
 */
export const emailEmptyValidator = (control: FormControl): { [key: string]: boolean } => {
  if (control.value && !REGEX_EMAIL.test(control.value)) {
    return {email: true, error: true};
  }
};

/**
 * url 正则验证
 */
export const urlValidator = (control: FormControl): { [key: string]: boolean } => {
  if (!control.value) {
    return {required: true};
  } else if (!REGEX_URL.test(control.value)) {
    return {url: true, error: true};
  }
};

/**
 * url 正则验证
 */
export const urlEmptyValidator = (control: FormControl): { [key: string]: boolean } => {
  if (control.value && !REGEX_URL.test(control.value)) {
    return {email: true, error: true};
  }
};

/**
 * url 首字母大写正则验证
 */
export const firstUppercaseValidator = (control: FormControl): { [key: string]: boolean } => {
  if (!control.value) {
    return {required: true};
  } else if (!REGEX_FIRST_UPPERCASE.test(control.value)) {
    return {firstUppercase: true, error: true};
  }
};
