import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
}
