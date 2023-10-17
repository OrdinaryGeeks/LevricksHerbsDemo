import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-personal-information',
  templateUrl: './checkout-personal-information.component.html',
  styleUrls: ['./checkout-personal-information.component.css']
})
export class CheckoutPersonalInformationComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  cashAppName: string = '';
  streetAddress: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';

  public Customer: Customer = { fName: '', lName:'', cAName: '', sAddress: '', c: '', s: '', z: '' }


  constructor() { }

  ngOnInit() {
  }

}

export interface Customer {
  fName: string;
  lName: string;
  cAName: string;
  sAddress: string;
  c: string;
  s: string;
  z: string;
}
