import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {

  master = inject(MasterService);

  carList: any[] = [];

  carForm: FormGroup = new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl(""),
    model: new FormControl(""),
    year: new FormControl(""),
    color: new FormControl(""),
    dailyRate: new FormControl(""),
    carImage: new FormControl(""),
    regNo: new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.master.getAllCars().subscribe((res: any) => {
      this.carList = res.data;
    }, error => {

    })
  }

  addNew() {
    this.carForm = new FormGroup({
      carId: new FormControl(0),
      brand: new FormControl(""),
      model: new FormControl(""),
      year: new FormControl(""),
      color: new FormControl(""),
      dailyRate: new FormControl(""),
      carImage: new FormControl(""),
      regNo: new FormControl("")
    })
  }

  onSaveCar() {
    const formValue = this.carForm.value;
    this.master.createCar(formValue).subscribe((res: any) => {
      if (res.result) {
        this.getCars();
        alert("Car registration succesfull");
      } else {
        alert(res.message);
      }
    })
  }

  onUpdateCar() {
    const formValue = this.carForm.value;
    this.master.updateCar(formValue).subscribe((res: any) => {
      if (res.result) {
        this.getCars();
        alert("Car Update succesfull");
      } else {
        alert(res.message);
      }
    })
  }

  onDeleteCar(id: number) {
    const isDelete = confirm("are you sure want to delete");
    if (isDelete) {
      this.master.deleteCar(id).subscribe((res: any) => {
        if (res.result) {
          this.getCars();
          alert("Record Update Sucess");
        } else {
          alert(res.message);
        }
      })
    }
  }

  onEdit(data: any) {
    this.carForm = new FormGroup({
      carId: new FormControl(data.carId),
      brand: new FormControl(data.brand),
      model: new FormControl(data.model),
      year: new FormControl(data.year),
      color: new FormControl(data.color),
      dailyRate: new FormControl(data.dailyRate),
      carImage: new FormControl(data.carImage),
      regNo: new FormControl(data.regNo)
    })
  }

  onReset() {
    this.carForm.reset();
  }
}
