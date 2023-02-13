import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volver',
  templateUrl: './volver.component.html',
  styleUrls: ['./volver.component.css']
})
export class VolverComponent implements OnInit {

  constructor( private location: Location) { }

  ngOnInit(): void {
  }
  volver()
  {
    this.location.back();
  }

}
