import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
//import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private accountsService:AccountsService){
    accountsService.statusUpdated.subscribe(
      (status:string) => console.log("New status " + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
  }
  
}
