import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  //We want this property to be accessed outside this
  // component ie. by parent component
  // so we add decorator @Input() in-front of
  //this property. We use this property in app-component.ts
  @Input() element : {type:string,name:string,content:string}; 

  //We can use alias for this property by passing a string inside @Input('aliasName'). Then inside html code
  //we can use this alias as property ie. in html instead of [element] we can use [aliasName]

  constructor() { }

  ngOnInit(): void {
  }

}
