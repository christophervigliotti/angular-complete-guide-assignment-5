import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    // do I need this?
    statusUpdated = new EventEmitter<string>();

    constructor(private counterService: CounterService){}

    changeStatus(id: number){
        
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