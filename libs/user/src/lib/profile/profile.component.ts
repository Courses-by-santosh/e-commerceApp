import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../store/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'org-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  // user = signal({});

  user = toSignal(this.userService.getUser()); 

  fullName = computed(() => this.user()?.name.firstname + ' ' + this.user()?.name.lastname);

  profileForm!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: new FormControl(this.user()?.id, Validators.required),
      email: this.user()?.email,
      phone: this.user()?.phone,
      address: this.fb.group({
        city: ['', Validators.required],
        street: this.user()?.address.street,
        number: this.user()?.address.number,
        zipcode: this.user()?.address.zipcode,
        geolocation: this.fb.group({
          lat: ['', Validators.required],
          long: ['', Validators.required],
        })
      }),
    });
  }
}
