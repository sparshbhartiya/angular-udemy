import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[AccountsService] We add providers array to tell Angular how to inject service in Component
})
export class AppComponent implements OnInit{
 
  accounts : {name:string,status:string}[] = [];
  constructor(private accountsService:AccountsService){

  }
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
