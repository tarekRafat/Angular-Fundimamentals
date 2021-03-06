import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventAppComponent } from "./envent_app.component";
import { EventListComponent } from "./event/event_list.component";
import { EventThumbnail } from "./event/event_thumbnails.component";
import { Navbar } from "./event/navbar/navbar.component";
import { EventService } from "./event/services/event_service";
import { ToastrService } from "./event/services/toastr_service";
import { EventDetails } from "./event-details/event_details.component";
import { RouterModule } from "@angular/router";
import { routes } from "./event/routes/routes";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    Navbar,
    EventAppComponent,
    EventListComponent,
    EventThumbnail,
    EventDetails,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
