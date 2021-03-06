import { Component, OnInit } from "@angular/core";
import { EventService } from "../event/services/event_service";

@Component({
  templateUrl: "./event_details.component.html",
  styles: [
    `
      .container {
        padding: 0rem 2rem;
      }
    `,
  ],
})
export class EventDetails implements OnInit {
  event: any;
  constructor(private eventDetails: EventService) {}
  ngOnInit(): void {
    this.event = this.eventDetails.getEventDetails(1);
  }
}
