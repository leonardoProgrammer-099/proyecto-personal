import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../services/rest-api.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  constructor(private  restS : RestApiService ){}
  Isprod = false;
  text = '';
  ngOnInit() {
    this.Isprod = this.restS.isProd();
    this.text = this.restS.isprodText();
  }
}
