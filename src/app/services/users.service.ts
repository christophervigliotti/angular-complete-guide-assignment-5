import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService){}

    setToActive(id: number){
        console.log('users.service > setToActive ' + id);
        var user_to_move = this.inactiveUsers[id];
        this.inactiveUsers.splice(id,1);
        this.activeUsers.push(user_to_move);
        this.counterService.doCount('inactive_to_active');
    }

    setToInactive(id: number){
        console.log('users.service > setToInactive ' + id);
        var user_to_move = this.activeUsers[id];
        this.activeUsers.splice(id,1);
        this.inactiveUsers.push(user_to_move);
        this.counterService.doCount('active_to_inactive');
    }

    // I could do it like this (or even keep all of the logic in setTo)
    setTo(id: number, active_or_inactive: string){
        console.log('users.service > setTo');
        if(active_or_inactive == 'active'){
            this.setToActive(id);
        }else if(active_or_inactive == 'inactive'){
            this.setToInactive(id);
        }else{
            // throw some sort of error
        }
    }

    /*
    cool idea to handle this by the string and not array position...
    ...cool but problematic idea
    changeStatus(name: string){
        console.log('users.service > changeStatus');

        if(this.activeUsers.includes(name)){
            this.arrayRemove(this.activeUsers,name);
            this.inactiveUsers.push(name)

        }else if(this.inactiveUsers.includes(name)){
            this.arrayRemove(this.inactiveUsers,name);
            this.activeUsers.push(name)

        }else{
            throw('users.service > changeStatus name "' + name) + '" not found';
        }

        this.counterService.doCount();
    }

    arrayRemove(anArray: string[], name: string) : string[] {
        anArray.forEach( (item, index) => {
          if(item === name) anArray.splice(index,1);
        });
        return anArray;
    }
    */
}