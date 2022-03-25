import { Injectable } from "@angular/core";
@Injectable()

export class CounterService {
    counter = 0;
    doCount(){
        this.counter++;
        console.log('counter.service > doCount ' + this.counter);
    }
}