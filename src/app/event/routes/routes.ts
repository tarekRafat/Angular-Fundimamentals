import { Routes } from "@angular/router";
import { EventDetails } from "src/app/event-details/event_details.component";
import { EventListComponent } from "../event_list.component";

export const routes: Routes = [
  { path: "event", component: EventListComponent },
  { path: "event/:id", component: EventDetails },
  { path: "", redirectTo: "/event", pathMatch: "full" },
];
