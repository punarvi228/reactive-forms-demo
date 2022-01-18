import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveformdemo',
  templateUrl: './reactiveformdemo.component.html',
  styleUrls: ['./reactiveformdemo.component.scss']
})
export class ReactiveformdemoComponent implements OnInit {

  closerDropdownData:any = ["Kim Shields","Rhonda Williams","Shela Bungartz-Vail","Mary Ellen Tellez"];
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  reverseWorksheetForm = this.fb.group({
    closerSelect:[]
  })
}
