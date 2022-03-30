import { Component, EventEmitter, Input, Output } from '@angular/core';
// WAT import { appendFile } from 'fs';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // old code... @Output() userSetToInactive = new EventEmitter<number>();

  constructor(
    private counterService: CounterService,
    private usersService: UsersService
  ){}

  onSetToInactive(id: number) {
    // old code... this.userSetToInactive.emit(id);
    console.log('active-users > onSetToInactive');
    this.usersService.setToInactive(id);
  }
}
