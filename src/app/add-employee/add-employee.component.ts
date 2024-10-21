import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { AddEditEmployeeFormComponent } from '../add-edit-employee-form/add-edit-employee-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [AddEditEmployeeFormComponent, RouterOutlet, RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',  
})

export class AddEmployeeComponent {
  
}
