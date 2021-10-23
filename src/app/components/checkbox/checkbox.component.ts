import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {



categories = [
  {id:1, select: false , name: 'Mens'},
  {id:2, select: false , name: 'Womens'},
  {id:3, select: false , name: 'kids'},
  {id:4, select: false , name: 'Jwelery'},
  {id:5, select: false , name: 'electronics'},
]

public propertyValue:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

checking($event:any){
const id =$event.target.value;
const isChecked =$event.target.checked;

this.categories = this.categories.map((n) => {
  if(n.id == id){
  n.select = isChecked;
  this.propertyValue = false;
  
  return n;
  }
 if(id == -1){
    n.select = this.propertyValue;
 }
 return n;
})


console.log(this.categories);
// console.log(isChecked);

}

}
