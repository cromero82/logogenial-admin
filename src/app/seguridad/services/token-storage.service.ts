import { Injectable } from '@angular/core';

const USER_TOKEN_KEY = 'tokenUsuario';
const USER_NAME_KEY = 'nameUsuario';
const USER_EMAIL_KEY = 'emailUsuario';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public setNameUser(data: string): void {
    window.sessionStorage.removeItem(USER_NAME_KEY);
    window.sessionStorage.setItem(USER_NAME_KEY, data);
  }

  public getNameUser(): any {
    return window.sessionStorage.getItem(USER_NAME_KEY);
  }

  public setTokenUser(data: string): void {
    window.sessionStorage.removeItem(USER_TOKEN_KEY);
    window.sessionStorage.setItem(USER_TOKEN_KEY, data);
  }

  public getTokenUser(): any {
    return window.sessionStorage.getItem(USER_TOKEN_KEY);
  }

  public setEmail(data: string): void {
    window.sessionStorage.removeItem(USER_EMAIL_KEY);
    window.sessionStorage.setItem(USER_EMAIL_KEY, data);
  }

  public getEmailUser(): any {
    return window.sessionStorage.getItem(USER_EMAIL_KEY);
  }

  public signOut(): void {
    window.sessionStorage.clear();
    localStorage.clear();
  }

}
