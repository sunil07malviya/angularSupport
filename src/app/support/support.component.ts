import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppSharedService } from '../app.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  supportForm: FormGroup;
  category: string[] = ["Operational", "Non-Operational"];
  amendmentType: string[] = ["Archiving", "Closing"];
  userName: string;
  showData = false;
  constructor(private formBuilder: FormBuilder, private appSharedService: AppSharedService) { }

  ngOnInit() {
    this.userName = this.appSharedService.getData();
    this.supportForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      amendmentType: ['', [Validators.required]],
      customerID: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      customerName: ['', [Validators.required , ]],
      accountNumber: ['', [Validators.required , ]],
      productType: ['', [Validators.required , ]],
      reason: ['', [Validators.required , ]],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      description: ['', [Validators.required , ]],
      transactionId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      transactionDate: ['', [Validators.required , ]],
    });
  }

  onSubmit() {
    this.showData = true;
    console.log(this.supportForm.value);
  }

  onChange(selectedValue: string) {
    console.log(selectedValue);
    if (selectedValue === "Archiving") {
      this.supportForm.controls["amount"].clearValidators();
      this.supportForm.controls["amount"].updateValueAndValidity();
      this.supportForm.controls["description"].clearValidators();
      this.supportForm.controls["description"].updateValueAndValidity();
      this.supportForm.controls["transactionId"].clearValidators();
      this.supportForm.controls["transactionId"].updateValueAndValidity();
      this.supportForm.controls["transactionDate"].clearValidators();
      this.supportForm.controls["transactionDate"].updateValueAndValidity();
    }else if(selectedValue === "Closing"){
      this.supportForm.controls["reason"].clearValidators();
      this.supportForm.controls["reason"].updateValueAndValidity();
    }

  }

}
