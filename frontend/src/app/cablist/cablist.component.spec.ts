import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CablistComponent } from './cablist.component';
import {FormsModule} from "@angular/forms";
import {CabService} from "../cab.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";


const cabService = jasmine.createSpyObj('CabService', ['getCabs', 'getCabsByLocation']);

let getCabsSpy = cabService.getCabs.and.returnValue( of([
  {
    name:'MockName',
    price: 1,
    rating: 2
  }
]) );

let getCabsLocationSpy = cabService.getCabsByLocation.and.returnValue( of([
  {
    name:'MockName',
    price: 1,
    rating: 2
  }
]) );


describe('CablistComponent', () => {
  let component: CablistComponent;
  let fixture: ComponentFixture<CablistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          CablistComponent,

      ],
      providers: [ {
        provide: CabService, useValue: cabService

      }],
      imports:[
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CablistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
