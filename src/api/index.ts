import {fetch} from './config';

const obj : any = {};
export default {
  onlineQrcode(key:String){return fetch(`loan-channel/online/qrCode/${key}`,obj,'get')}
}

