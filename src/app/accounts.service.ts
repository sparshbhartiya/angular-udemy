import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable() //We use this decorator when we want to inject some service into this service
export class AccountsService{

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    statusUpdated = new EventEmitter<string>(); //We can use services for cross component communication 
    //We don't have to use @Output and @Input decorator and property binding 
    //chains to trigger events between components  with same
    //level 
    constructor(private loggingService:LoggingService){}
    addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChanged(status);
    }
    updateAccount(id:number,status:string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChanged(status);

    }
}