export class CounterService{

   

    incrementActiveCounter(length:number){
        alert("Active users: " + length);
    }
    incrementInactiveCounter(length:number){
        alert("Inactive users: " + length);

    }
}