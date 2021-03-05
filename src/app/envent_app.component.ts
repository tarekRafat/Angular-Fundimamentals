import { Component } from "@angular/core";

@Component({
  template: `
    <nav-bar></nav-bar>
    <event-list></event-list>
  `,
  selector: "event-app",
})
export class EventAppComponent {
  title = "angular-fundamentals";
}
