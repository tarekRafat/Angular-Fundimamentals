import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "./event_service";

@Injectable()
export class ActivateService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEventDetails(
      +route.params["id"]
    );
    if (!eventExists) {
      this.router.navigate(["/404"]);
    }
    return eventExists;
  }
}
