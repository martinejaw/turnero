import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      const resp = await this.loginService.login(
        this.form.value.username,
        this.form.value.password
      );
    }
  }
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();
}
