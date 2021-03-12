import { Injectable } from "@angular/core";
declare let toastr;
@Injectable()
export class ToastrService {
  success(message, title) {
    toastr.success(message, title);
  }
  info(message, title) {
    toastr.info(message, title);
  }
  warnning(message, title) {
    toastr.warnning(message, title);
  }
  error(message, title) {
    toastr.error(message, title);
  }
}
