import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /*
  We create this custom event listener properties by using EventEmitter class which takes object or data 
  we want to pass to parent component ie. here to app component. We add @Output to make this properties 
  kind of listenable. It's @output with parentheses because we're passing something out of the component,
   we're passing our event out of the component
  */
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  //We can give aliases to listener properties by passing alias in @Output('alias')
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  //We use @ViewChild decorator to access html element without need to pass the local reference to method
  //Pass the name of local refrence or Component(in case where a component needs to use another component)
  //inside the @ViewChild decorator.
  //Sometimes you want to get access before we call the method and there is a nice old 
  //decorator we can use @ViewChild
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNamedInput : HTMLInputElement) {
    //console.log(serverNamedInput);
    this.serverCreated.emit({serverName:serverNamedInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNamedInput : HTMLInputElement) {
    this.blueprintCreated.emit({serverName:serverNamedInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }
}
