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
  // radio buttons
  genders = ['male', 'female'];

  // object for user inputs to return

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  // tracking the if submitted or not

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setting value of the whole form


    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //    email: '',
    //  },
    //   secret: 'pet',
    //  questionAnswer: '',
    // gender: 'male',//
    // });

    // .set-value overrides whole form patch value overrides selected parts.
    // better approach.
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

// on submit method for submit form.
  // need ngForm.
  // onSubmit(form: NgForm) {
  // console.log(form);
  // }

  // alternative using view child to get local ref.

  onSubmit() {
    // updating user object.
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // resetting the form on submit
    this.signupForm.reset();
  }
}
