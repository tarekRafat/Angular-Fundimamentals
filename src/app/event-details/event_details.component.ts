import { Component, OnInit } from "@angular/core";
import { EventService } from "../event/services/event_service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./event_details.component.html",
  styles: [
    `
      .container {
        padding: 0rem 2rem;
      }
      img {
        height: 11rem;
      }
    `,
  ],
})
export class EventDetails implements OnInit {
  event: any;
  constructor(
    private eventDetails: EventService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.event = this.eventDetails.getEventDetails(
      +this.route.snapshot.params["id"]
    );
  }
}
