import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventAppComponent } from "./envent_app.component";
import { EventListComponent } from "./event/event_list.component";
import { EventThumbnail } from "./event/event_thumbnails.component";
import { Navbar } from "./event/navbar/navbar.component";
import { EventService } from "./event/services/event_service";

@NgModule({
  imports: [BrowserModule],
  declarations: [Navbar, EventAppComponent, EventListComponent, EventThumbnail],
  providers: [EventService],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
