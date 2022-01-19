import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveformdemo',
  templateUrl: './reactiveformdemo.component.html',
  styleUrls: ['./reactiveformdemo.component.scss']
})
export class ReactiveformdemoComponent implements OnInit {

  closerDropdownData:any = ["Kim Shields","Rhonda Williams","Shela Bungartz-Vail","Mary Ellen Tellez"];

  lockType:any = ["Standard Lock (2 day Fixed)","15 Day","Relock (Worst Case Pricing)","Lock Extension (3 day)","N/A"];

  mipPercentage:any = ["0.5","2%","2.5%"];

  productType:any = ["Fixed","Annual","Annual Low Cost","HECM 999 Annual","4500 Annual 400","4500 Annual 400","Equity Edge Fixed","Equity Edge Low Cost"];

  marginRate:any =["1.24","1.25","1.365","1.375","1.50","1.625","1.75","1.875","2.0"];

  pricingEcception:any = ["yes","no"];

  exceptionType:any = ["Origination Fee Waiver","Lock Extension","Other (please indicate in Notes)"];

  approvedBy:any = ["Richard Thorpe","Patrick Lambrecht","David Peskin","Oscar Moure","Eric Ellsworth"];

  productChange:any = ["Yes*","No"];

  // final payment plan 
  finalPlanData:any = ["Line Of Credit","Cash Draw","Modified Term","Term","Modified Tenure","Tenure"];
  // ends final payment plan 
  
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  reverseWorksheetForm = this.fb.group({
    closerSelect:[],
    dateType:[],
    loanOfficer:[],
    borrower:[],
    loanNo:[],
    lockTypeDropDown:[],
    mipPercentageDropDown:[],
    productTypeDropDown:[],
    marginRateDropDown:[],
    pricingEcceptionDropDown:[],
    exceptionTypeDropDown:[],
    approvedByDropDown:[],
    productChangeDropDown:[],
    formControlName:[],
    loc:[],
    cashD:[],
    mt:[],
    term:[],
    mTenure:[],
    tenute:[],
    closingDate:[],
    timeN:[],
    placeN:[],
    notary:[],
    phoneNum:[],
    Origination:[],
    loanC:[],
    hotCollected:[],
    loanSign:[]
  })
}
