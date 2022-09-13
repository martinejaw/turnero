import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  hide = true;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    businessName: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      const { email, password, businessName } = this.form.value;
      this.authService.signup(email, password, businessName);
    }
  }
}
