import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AddEditEmployeeFormComponent } from '../add-edit-employee-form/add-edit-employee-form.component';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-employee-data',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, AddEditEmployeeFormComponent],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})
export class EmployeeDataComponent {

  constructor(private employeeService: EmployeeService) {
  }

  isLoading : boolean = true;
  ngOnInit(): void {
    this.getData()
  }

  router = inject(Router);

  addEmployee() {
    this.router.navigate(['/addemployee']);
  }

  editEmployee(id: any) {
    this.router.navigate(['/editEmployee', id]);
  }

  deleteEmployee(id: any) {
    this.router.navigate(['/deleteEmployee', id]);
  }

  data: any = [];
  getData() {
    this.employeeService.getAllEMployees().subscribe({
      next: (response) => {
        this.data = response;
        console.log(this.data.data);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    });
  }
}
