import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {

  isDelete : boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService, private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  showError(errorMessage: string): void {
    this.snackBar.open(errorMessage, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
  }

  close() {
    this.router.navigate(['/employeeData']);
  }

  delete() {
    this.isDelete = true;
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.employeeService.deleteEmployeeByID(id).subscribe({
        next: (response: any) => {
          if (response.success === true) {
            console.log('Employee is deleted');
            this.showSuccess(response.message);
          } else {
            this.showError(response.message);
          }
          this.router.navigate(['/employeeData']);
        },
        error: (error) => {
          console.log(error);
          this.showError(error.message);
          this.router.navigate(['/employeeData'])
            .then(() => {
            window.location.reload();
          });
        }
      })
    }
  }

}
