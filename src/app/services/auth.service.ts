import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl, requesterId, apiVersion } from '../constants/constants';

import { UserInfo } from '../models/userInfo';
import { TokenInfo } from '../models/TokenInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfo: UserInfo;

  constructor(private http: HttpClient) { }

  /**
   * Call APROPLAN API to authenticate a user.
   * If the authentication is successfull, the API returns a TokenInfo object
   * @param username Email adress of the user
   * @param password Password of the account
   */
  public login(username: string, password: string) {
    const loginUrl = baseUrl + 'simpleloginsecure' + '?requesterid=' + requesterId + '&v=' + apiVersion + '&dateformat=iso';
    this.http.post<TokenInfo>(loginUrl, {
      'Alias': username,
      'Pass': password
    }).subscribe(
      res => {
        console.log('Welcome ' + res.UserInfo.DisplayName + '!');
        console.log('Token valid until ' + new Date(res.ValidityLimit));
      },
      err => {
        console.log('Error occured: ' + err);
      }
    );
  }
}
