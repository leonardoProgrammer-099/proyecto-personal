import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor() { }

   isProd() {
    return environment.production;
  }
  isprodText(){
    return environment.is;
  }


}
