import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../user';
import { ConfirmPasswordValidation } from '../../../services/PasswordValidation';
import { FormValidationService } from '../../../services/form-validation.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  user: User[];
  submitted = false;
  fetchForm = false;
  vMsg = {
    email: [
      { type: 'required', message: 'email is required' },
      { type: 'email', message: 'insert a valid email address please' }
    ],
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minLength', message: 'minimum password length is 8' }
    ]
  };

  constructor(private userService: UsersService,
              public bsModalRef: BsModalRef,
              private formBuilder: FormBuilder,
              private formValidator: FormValidationService) { }

  ngOnInit() {
  }

  createUserForm() {
    this.userForm = this.formBuilder.group(
      {
        id: '',
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        status: true,
      },
      {
        validator: ConfirmPasswordValidation.MatchPassword
      }
    );
    this.fetchForm = true;
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }

  register() {
    this.submitted = true;
    if (this.userForm.valid) {
      const param: User = {
        id: 0,
        fullName: this.userForm.value.fullName,
        email: this.userForm.value.email,
        phoneNumber: this.userForm.value.phoneNumber,
        password: this.userForm.value.password,
        status: this.userForm.value.active,
      };
      this.userService.addUser(param).subscribe(resp => {
        // response
      });
    }
  }

  isValid(controlName: string): boolean {
    return this.formValidator.isValid(
      this.userForm,
      controlName,
      this.submitted
    );
  }

}
