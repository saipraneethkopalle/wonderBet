import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  secretKey = "WB13579";
  headers:any = {'authorization':localStorage.getItem("token") };
  constructor(private http:HttpClient) { }
  
  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
  login(data:any){
    data = {payload:this.encrypt(JSON.stringify(data))};
    const url = environment.url + "/api/v1/noAuth/login"
    return this.http.post(url,data)
  }
}
