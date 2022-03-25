import { Component, EventEmitter, Input, Output } from '@angular/core';
import { appendFile } from 'fs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // old code... @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    // old code... this.userSetToInactive.emit(id);
      console.log('active-users > onSetToInactive');
      this.usersService.changeStatusByArrayPosition(id);
    }    
  }
}
