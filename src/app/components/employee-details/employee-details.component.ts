import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  styleUrls: ['./employee-details.component.scss'],
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  private _selectedEmployeeIdSubject: Subject<string> = new Subject<string>();
  public selectedEmployeeId$: Observable<string> = this._selectedEmployeeIdSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployeeId$.pipe(
    switchMap(data => this._employeeService.getOne(data)));

  constructor(private _employeeService: EmployeeService) {
  }

  selectEmployee(id: string): void {
    this._selectedEmployeeIdSubject.next(id);
  }
}
