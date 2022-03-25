import { Injectable } from "@angular/core";
@Injectable()

export class LoggingService {

    counter = 0;
    doCount(){
        this.counter++;
        console.log('counter.service > doCounter ' + this.counter);
    }
}