import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AddEditEmployeeFormComponent } from '../add-edit-employee-form/add-edit-employee-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [AddEditEmployeeFormComponent, RouterOutlet, RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
}
