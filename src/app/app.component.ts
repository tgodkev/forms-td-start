import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // view child to get access to local ref.
  @ViewChild('f') signupForm: NgForm;

  // for drop down options.
  defaultQuestion = 'pet';

  // two way binding for drop down question
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

// on submit method for submit form.
  // need ngForm.
  // onSubmit(form: NgForm) {
  // console.log(form);
  // }

  // alternative using view child to get local ref.

  onSubmit() {
    console.log(this.signupForm);
  }
}
