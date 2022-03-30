import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(
    private counterService: CounterService,
    private usersService: UsersService
  ){}

  onSetToActive(id: number) {
    console.log('inactice-users > onSetToActive');
    this.usersService.setToActive(id);
  }

  /*
  old code
  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
  */
}
