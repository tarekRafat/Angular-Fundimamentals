import { Component } from "@angular/core";

@Component({
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  selector: "event-app",
})
export class EventAppComponent {
  title = "angular-fundamentals";
}
