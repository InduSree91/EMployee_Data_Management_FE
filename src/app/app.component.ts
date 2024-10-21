import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AddEmployeeComponent, DeleteEmployeeComponent, EmployeeDataComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pet-Project-Frontend';

  // constructor() {}

  router = inject(Router);

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
