import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import * as api from 'proyecto-1b-api-github';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  user: User;
  constructor() { }

  takeApiData(respuesta: string): Promise<any>  {
    return new Promise(function (resolve: any) {
      api.obtenerDatosDeUsuario(respuesta)
          .then(
            (data: User) => {
              if (data.login === undefined) {
                console.log('no data');
              } else {
                console.log(data);
              }
              resolve(data);
            }
          ).
          catch((error: any) => {
            resolve(error);
          });
    });
  }
}
