import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "new-event",
  template: `
    <h1>Nev Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Create Event Form will go here tarek!!]</h3>
      <br />
      <br />
      <button type="submit" class="bnt btn-primary">Save</button>
      <button type="button" class="bnt btn-default" (click)="cancel()">
        Cancel
      </button>
    </div>
  `,
})
export class NewEventComponent {
  constructor(private route: Router) {}
  cancel() {
    this.route.navigate(["./event"]);
    console.log("cancel btn is working");
  }
}
