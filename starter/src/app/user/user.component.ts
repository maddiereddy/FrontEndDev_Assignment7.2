import { Component } from '@angular/core';

@Component({
    selector: 'my-user',
    templateUrl: './user.component.html',
    styleUrls: ['../app.component.css']
})
export class UserComponent {
    userList: any = [
        {name: 'Avnesh Shakya', age: 26, company: 'Acalgild', gender: 'male', role: 'User'},
        {name: 'Adam Schultz', age: 30, company: 'Facebook', gender: 'male', role: 'Admin'},
        {name: 'Maddie Reddy', age: 41, company: 'Twitter', gender: 'female', role: 'Supervisor'},
        {name: 'Vasu Rao', age: 21, company: 'Uber', gender: 'male', role: 'Super Admin'},
        {name: 'Amit Dey', age: 55, company: 'LinkedIn', gender: 'male', role: 'Supervisor'},
        {name: 'Joe Adams', age: 20, company: 'Airbnb', gender: 'male', role: 'User'},
        {name: 'Kay Williams', age: 24, company: 'Google', gender: 'female', role: 'Supervisor'},
        {name: 'David McIntyre', age: 33, company: 'Tesla', gender: 'male', role: 'User'}
    ]
}