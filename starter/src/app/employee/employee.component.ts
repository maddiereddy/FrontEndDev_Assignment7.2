import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styles: [`
    .even { background-color: lightblue; }
    .odd { background-color: deepskyblue; }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .badge {
      display: inline-block;
      padding: 0.8em 0.7em 0 0.7em;
      line-height: 1em;
      position: relative;
      left: -1px;
      height: 1.4em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    `]
})
export class EmployeeComponent {

    empList: any = [
        {name: 'Avnesh Shakya', companyName: 'Acalgild', designation: 'Software Engineer', gender: 'male', age: 26},
        {name: 'Adam Schultz', companyName: 'Facebook', designation: 'VP-Sales', gender: 'male', age: 30},
        {name: 'Maddie Reddy', companyName: 'Snapchat', designation: 'Senior Developer', gender: 'female', age: 41},
        {name: 'Vasu Rao', companyName: 'Airbnb', designation: 'SVP-Marketing', gender: 'male', age: 21},
        {name: 'Amit Dey', companyName: 'Uber', designation: 'Sales Rep', gender: 'male', age: 55},
        {name: 'Joe Adams', companyName: 'Twitter', designation: 'Staff Engineer', gender: 'male', age: 20},
        {name: 'Kay Williams', companyName: 'LinkedIn', designation: 'Design Engineer', gender: 'female', age: 24},
        {name: 'David McIntyre', companyName: 'Instagram', designation: 'CEO', gender: 'male', age: 33}
    ]

    selectedEmployee: EmployeeComponent;
    onSelect(employee: EmployeeComponent): void {
        this.selectedEmployee = employee;
    }
}
