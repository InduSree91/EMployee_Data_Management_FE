import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-edit-employee-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule,],
  templateUrl: './add-edit-employee-form.component.html',
  styleUrl: './add-edit-employee-form.component.css',
  providers: []
})

export class AddEditEmployeeFormComponent {

  @Input() formMode!: string;
  @Input() item: any;

  employeeData: any;

  isSaving : boolean = false;

  addempForm!: FormGroup;


  constructor(private _fb: FormBuilder, private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService, private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: ['snackbar-success']
    });
  }

  showError(errorMessage: string): void {
    this.snackBar.open(errorMessage, 'Close', {
      duration: 4000,
      panelClass: ['snackbar-error']
    });
  }

  ngOnInit() {

    this.addempForm = this._fb.group({
      id: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.pattern(/^[A-Za-z]+(?:[\s][A-Za-z]+)*$/)])],
      DOB: ['', Validators.compose([Validators.required, Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)])],
      gender: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]{1,10}$/)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)])],

    })
    this.addempForm.get('choice')?.valueChanges.subscribe((value) => {
      console.log("Selected value:", value);
    });

    if (this.formMode === 'edit') {

      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);

      if (id) {
        this.employeeService.getEmployeeByID(id).subscribe({
          next: (data) => {
            this.employeeData = data;
            console.log("Data in Employee Data", this.employeeData);
            this.addempForm.patchValue(this.employeeData.data);
            console.log("Form value after patching", this.addempForm.value);
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    }
  }

  close() {
    this.router.navigate(['/employeeData']);
  }

  onSubmit() {
    if (this.formMode === 'add') {
      this.add();
    }
    else if (this.formMode === 'edit') {
      this.edit();
    }
  }


  add() {
    this.isSaving = true;
    this.employeeService.createEmployee(this.addempForm.value).subscribe({
      next: (response) => {
        if (response.success === true) {
          console.log('Data received:', response);
          this.router.navigate(['/employeeData']);
          this.showSuccess(response.message);
        }
        else {
          this.showError(response.message);
          this.router.navigate(['/employeeData']);
        }
        
      },
      error: (error) => {
        console.error('Error occurred:', error);
        this.showError(error.message);
        this.router.navigate(['/employeeData']);
      }
    });

  }

  edit() {
    this.isSaving = true;
    this.employeeService.updateEmployee(this.addempForm.value.id, this.addempForm.value).subscribe({
      next: (response) => {
        if (response.success === true) {
          console.log('Employee updated successfully:', response);
          this.showSuccess(response.message);
          this.router.navigate(['/employeeData']);
        }
        else {
          this.showError(response.message);
          this.router.navigate(['/employeeData']);
        }
        
      },
      error: (error) => {
        console.error('Error occurred while updating employee:', error);
        this.showError(error.message);
        this.router.navigate(['/employeeData']);
      }
    });

  }
}
