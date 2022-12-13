import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  styleUrls: ['./user-details.component.scss'],
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  readonly list$: Observable<UserModel[]> = this._userService.getAll();
  private _selectedUserIdSubject: Subject<string> = new Subject<string>();
  public selectedUserId$: Observable<string> = this._selectedUserIdSubject.asObservable();
  readonly details$: Observable<UserModel> = this.selectedUserId$.pipe(switchMap(data => this._userService.getOne(data)));

  constructor(private _userService: UserService) {
  }

  selectUser(id: string): void {
    this._selectedUserIdSubject.next(id);
  }
}
