import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.navbar-nab {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      .active {
        color: #f97924 !important;
      }
    `,
  ],
})
export class Navbar {
  constructor(private auth: AuthService) {}
}
