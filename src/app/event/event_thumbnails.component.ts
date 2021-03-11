import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="[event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div [ngSwitch]="event?.time" [ngClass]="applyClasses()">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div [hidden]="!event.location">
        <span>Location : {{ event?.location?.address }}</span>
        <span class="header-txt"> {{ event?.location?.city }}</span
        ><span> {{ event?.location?.country }}</span>
      </div>
      <span *ngIf="event.onlineUrl">onlineURL:{{ event?.onlineUrl }}</span>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .green {
        color: green;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbnail {
  @Input() event: any;
  applyClasses() {
    if (this.event && this.event.time === "8:00 am") {
      return ["green", "bold"];
    }
    return [];
  }
}
