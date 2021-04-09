import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
  msg: Number;
  onClick(n) {

    n: parseInt(n);
    let sm:number =0;
    while(n>0){
      sm=Math.floor(sm + n % 10);
      n=Math.floor(n /10);
    
    }
    this.msg=sm;
  }
}


