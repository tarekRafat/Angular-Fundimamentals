import { Component, OnInit } from "@angular/core";
import { isConstructorDeclaration } from "typescript";
import { EventService } from "./services/event_service";

@Component({
  selector: "event-list",
  template: `
    <div>
      <h2>Upcoming Angular Events</h2>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events: any[];
  constructor(private getAllData: EventService) {}
  ngOnInit(): void {
    this.events = this.getAllData.getEvents();
  }
}
