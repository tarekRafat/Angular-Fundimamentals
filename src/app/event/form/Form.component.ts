import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  //   templateUrl: "form.component.html",
  templateUrl: "./form.component.html",
  styles: [
    `
      .error-msg {
        color: #ff0033;
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
export class FormComponent {
  enterLogin: boolean;
  constructor(private authService: AuthService, private route: Router) {}
  password;
  log(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.redirectHomePage();
  }
  redirectHomePage() {
    this.route.navigate(["event"]);
  }
  cancel() {
    this.redirectHomePage();
  }
}
