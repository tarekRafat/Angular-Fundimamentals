import { Component, OnInit } from "@angular/core";
import { isConstructorDeclaration } from "typescript";
import { EventService } from "./services/event.service";
import { ToastrService } from "./services/toastr.service";

@Component({
  template: `
    <div>
      <h2>Upcoming Angular Events</h2>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail
            (click)="popupMsg(event?.name, event?.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events: any[];
  constructor(
    private getAllData: EventService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.events = this.getAllData.getEvents();
  }
  popupMsg(message: string, title: string) {
    this.toastr.success(message, title);
  }
}
