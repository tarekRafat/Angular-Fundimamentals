import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "new-event",
  templateUrl: "./new-event.component.html",
  styles: [
    `
      .error input {
        background-color: #e3c3c5;
        color: white;
      }
      em {
        color: #e05c65;
        padding-left: 10px;
      }
      .label_error {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class NewEventComponent implements OnInit {
  private firstName: FormControl;
  private lastName: FormControl;
  profilForm: FormGroup;
  constructor(private route: Router, private user: AuthService) {}
  ngOnInit(): void {
    this.firstName = new FormControl(this.user.userInfo.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*"),
    ]);
    this.lastName = new FormControl(
      this.user.userInfo.lastName,
      Validators.required
    );
    this.profilForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
  edit(formValues) {
    let { firstName, lastName } = formValues;
    let { userInfo } = this.user;
    userInfo.userName = firstName;
    userInfo.lastName = lastName;
    if (this.validateFirstName() && this.validateLastName()) {
      this.route.navigate(["./event"]);
    }
  }
  cancel() {
    this.route.navigate(["./event"]);
    console.log("cancel btn is working");
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
