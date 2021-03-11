import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  userInfo: UserInfo;
  loginUser(userName: string, password: string) {
    this.userInfo = {
      id: 1,
      userName: userName,
      firstName: "Tarek",
      lastName: "Abdubalry",
    };
  }
  isAuthentacted() {
    return !!this.userInfo;
  }
}
interface UserInfo {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
}
