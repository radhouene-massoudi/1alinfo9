import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
id:any;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {

this.id=this.ac.snapshot.params['test'];
console.log(this.id);
this.ac.params.subscribe(
  (d)=>{
    console.log(d)
  }
)
  }
  test(){
    
  }
}
