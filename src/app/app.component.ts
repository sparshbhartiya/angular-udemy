import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  /*
  We create this two methods as listener methods which executes after user performs a custom event. This
  methods takes data from the custom events.
  */
  onServerAdded(serverData : {serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    
  }

  onBlueprintAdded(blueprintData : {serverName:string,serverContent:string}) {
    
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    
  }

 
}
