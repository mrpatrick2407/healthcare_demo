import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/login/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { MedicineComponent } from './home/medicine/medicine.component';
import { AppointmentComponent } from './home/appointment/appointment.component';
import { SymptomComponent } from './home/symptom/symptom.component';
import { ProductComponent } from './home/product/product.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ContactComponent } from './home/contact/contact.component';
import { LoginGuard } from './guards/login.guard';

  const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      
      { path: 'appointment', component: AppointmentComponent ,canActivate:[LoginGuard]},
      { path: 'symptoms', component: SymptomComponent,canActivate:[LoginGuard] },
      { path: 'prescriptions', component: ProductComponent,canActivate:[LoginGuard] },
      { path: 'home', component: HomepageComponent,canActivate:[LoginGuard] },
      { path: 'contact', component: ContactComponent,canActivate:[LoginGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
