import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SignupComponent } from './login/login/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { MedicineComponent } from './home/medicine/medicine.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupSuccessDialogComponent } from './login/login/signup-success-dialog/signup-success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentComponent } from './home/appointment/appointment.component';
import {MatRadioModule} from '@angular/material/radio';
import { SymptomComponent } from './home/symptom/symptom.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchPipe } from './home/symptom/search.pipe';
import {ChartModule} from 'primeng/chart';
import { ProductComponent } from './home/product/product.component';
import { FilterPipe } from './home/product/filter.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ContactComponent } from './home/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MedicineComponent,
    SignupSuccessDialogComponent,
    AppointmentComponent,
    SymptomComponent,
    SearchPipe,
    ProductComponent,
    FilterPipe,
    HomepageComponent,
    ContactComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
MatFormFieldModule,
MatDatepickerModule,
MatNativeDateModule,
MatButtonModule,
MatCheckboxModule,
MatIconModule,
HttpClientModule,
MatDialogModule,
    FlexLayoutModule,
    MatSelectModule,
    MatSidenavModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatCardModule,
    ChartModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
