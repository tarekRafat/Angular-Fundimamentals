import { Routes } from "@angular/router";
import { EventDetails } from "src/app/event-details/event_details.component";
import { Error404Component } from "../errors/404.component";
import { EventListComponent } from "../event_list.component";
import { NewEventComponent } from "../new-event/new-event.component";
import { ActivateService } from "../services/activate.service";

export const routes: Routes = [
  { path: "event/new", component: NewEventComponent },
  { path: "event", component: EventListComponent },
  {
    path: "event/:id",
    component: EventDetails,
    canActivate: [ActivateService],
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/event", pathMatch: "full" },
];
