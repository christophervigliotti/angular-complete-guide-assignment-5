import { Injectable } from "@angular/core";
@Injectable()

export class CounterService {
    counter = 0;
    active_to_inactive_counter = 0;
    inactive_to_active_counter = 0;
    doCount(which_counter: string){
        this.counter++;
        if(which_counter == 'active_to_inactive'){
            this.active_to_inactive_counter++;
            console.log(this.active_to_inactive_counter);
        }else if(which_counter == 'inactive_to_active'){
            this.inactive_to_active_counter++;
            console.log(this.inactive_to_active_counter);
        }else{
            // throw an error
        }
    }
}