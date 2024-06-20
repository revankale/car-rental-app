import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp/";

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any> {
    return this.http.get(`${this.apiUrl}GetCars`);
  }

  createCar(obj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}CreateNewCar`, obj);
  }

  updateCar(obj: any): Observable<any> {
    return this.http.put(`${this.apiUrl}UpdateCar`, obj);
  }

  deleteCar(carId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}DeleteCarbyCarId=${carId}`);
  }

  getAllBooking(): Observable<any> {
    return this.http.get(`${this.apiUrl}geAllBookings`);
  }

  createBooking(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrl}CreateNewBooking`, obj);
  }




}
