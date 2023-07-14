import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { userFeature, UserService } from '@org/common/store';
import { filter } from 'rxjs';

@Component({
  selector: 'org-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  // user = signal({});

  user = toSignal(this.userService.getUser());

  fullName = computed(
    () => this.user()?.name.firstname + ' ' + this.user()?.name.lastname
  );

  profileForm!: FormGroup;

  profile$ = this.store.select(userFeature.selectUser);

  get addresses() {
    return this.profileForm.get('address') as FormArray;
  }

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      email: ['', Validators.required],
      phone: '',
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
      }),
      address: this.fb.group({
        city: ['', Validators.required],
        street: '',
        number: '',
        zipcode: '',
        geolocation: this.fb.group({
          lat: ['', Validators.required],
          long: ['', Validators.required],
        }),
      }),
      // address: this.fb.array([this.prepareAddressForm()]),
    });

    this.loadProfile();
  }

  prepareAddressForm() {
    return this.fb.group({
      city: ['', Validators.required],
      street: '',
      number: '',
      zipcode: '',
      geolocation: this.fb.group({
        lat: ['', Validators.required],
        long: ['', Validators.required],
      }),
    });
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  resetAddress() {
    this.addresses.clear();
  }

  addControl() {
    this.addresses.push(this.prepareAddressForm());
  }

  loadProfile() {
    this.profile$.pipe(filter((user) => !!user)).subscribe((user) => {
      this.profileForm.patchValue(user || {});
    });
  }

  updateProfile() {
    this.userService
      .updateUser(this.profileForm.getRawValue())
      .subscribe((user) => {
        console.log(user);
      });
  }

  toggleEdit() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
  }
}
