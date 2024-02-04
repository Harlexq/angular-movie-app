import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  errorHandler(err: HttpErrorResponse) {
    if (err.status == 404 || err.status == 0) {
      console.log(`Api Adresine Ulaşılamıyor ${err.message}`);
    }
  }
}
