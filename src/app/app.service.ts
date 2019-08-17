import { Injectable } from "@angular/core";


// Name Service
export interface myData {
   name:string;
}



@Injectable()
export class AppSharedService {
  sharingData: myData={name:"sunil"};
  saveData(str){
    console.log('save data function called' + str + this.sharingData.name);
    this.sharingData.name=str; 
  }
  
  getData()
  {
    console.log('get data function called');
    return this.sharingData.name;
  }
} 