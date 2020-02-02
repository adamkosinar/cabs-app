import { Component, OnInit } from '@angular/core';
import {CabService} from "../cab.service";
import {Cab} from "../Cab";

@Component({
  selector: '',
  templateUrl: './cablist.component.html',
  styleUrls: ['./cablist.component.css']
})
export class CablistComponent implements OnInit {

  public location: string;
  public cabs: Cab[];

  constructor(private cabService: CabService) { }

  ngOnInit() {

    this.location = '';
    this.getCabs();

  }

  private  getCabs(): void {
    this.cabService.getCabs()
        .subscribe(cabs => this.cabs = cabs);
  }

  public getCabsByLocation(): void {

    this.cabService.getCabsByLocation(this.location)
        .subscribe(cabs => this.cabs = cabs);

  }

}
