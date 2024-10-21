import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { AddEditEmployeeFormComponent } from './add-edit-employee-form/add-edit-employee-form.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: 'addemployee', component: AddEmployeeComponent},
    {path: 'editEmployee/:id', component: UpdateEmployeeComponent},
    {path: 'deleteEmployee/:id', component: DeleteEmployeeComponent},
    {path: 'employeeData', component: EmployeeDataComponent},
    {path: 'home', component: HomePageComponent},
];
