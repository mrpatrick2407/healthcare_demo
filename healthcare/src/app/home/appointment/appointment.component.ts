import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:AppointmentService) {}
  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'other', viewValue: 'Other' }
  ];
  
  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
      consultedDoctor:[''],
      previousCondition:[''],
      address: this.fb.group({
        guestAddress: [''],
        guestCity: [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
      }),
      reason: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.appointmentForm.valid) {
     this.service.submitappointment(this.appointmentForm).subscribe((req)=>console.log(req))
    }
  }
}
