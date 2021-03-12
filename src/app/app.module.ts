import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventAppComponent } from "./envent_app.component";
import { EventListComponent } from "./event/event_list.component";
import { EventThumbnail } from "./event/event_thumbnails.component";
import { Navbar } from "./event/navbar/navbar.component";
import { EventDetails } from "./event-details/event_details.component";
import { RouterModule } from "@angular/router";
import { routes } from "./event/routes/routes";
import { NewEventComponent } from "./event/new-event/new-event.component";
import { Error404Component } from "./event/errors/404.component";
import { ActivateService } from "./event/services/activate.service";
import { FormComponent } from "./event/form/Form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./event/services/auth.service";
import { EventService } from "./event/services/event.service";
import { ToastrService } from "./event/services/toastr.service";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NewEventComponent,
    Navbar,
    EventAppComponent,
    EventListComponent,
    EventThumbnail,
    EventDetails,
    Error404Component,
    FormComponent,
  ],
  providers: [EventService, ToastrService, ActivateService, AuthService],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
