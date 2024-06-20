import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, DatePipe, CurrencyPipe],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {


  bookingList: any[] = [];
  carList: any[] = [];

  bookingObj: any = {
    "CustomerName": "",
    "CustomerCity": "",
    "MobileNo": "",
    "Email": "",
    "BookingId": 0,
    "CarId": 0,
    "BookingDate": new Date(),
    "Discount": 0,
    "TotalBillAmount": 0
  }

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.getBooking();
    this.getAllCar();
  }

  getBooking() {
    this.master.getAllBooking().subscribe((res: any) => {
      this.bookingList = res.data;
    })
  }

  getAllCar() {
    this.master.getAllCars().subscribe((res: any) => {
      this.carList = res.data;
    })
  }

  onSaveBooking() {
    this.master.createBooking(this.bookingObj).subscribe((res: any) => {
      if (res.result) {
        alert("Booking created success");
        this.getBooking();
      } else {
        alert(res.message)
      }
    })
  }

  onReset(){
    this.bookingObj = {
      "CustomerName": "",
      "CustomerCity": "",
      "MobileNo": "",
      "Email": "",
      "BookingId": 0,
      "CarId": "",
      "BookingDate": new Date(),
      "Discount": 0,
      "TotalBillAmount": 0
    }
  }
}
