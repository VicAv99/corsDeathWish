import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cors-ui-login',
  templateUrl: './ui-login.component.html',
  styleUrls: ['./ui-login.component.scss']
})
export class UiLoginComponent implements OnInit {
  form: FormGroup;
  @Output() loggedIn = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    this.loggedIn.emit(this.form.value);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

}
