import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-print-layout-invoice',
  templateUrl: './print-layout-invoice.component.html',
  styleUrls: ['./print-layout-invoice.component.css']
})
export class PrintLayoutInvoiceComponent implements OnInit,OnChanges {

  @Input()
  invoice:ResInvoice;
  constructor(private cdr:ChangeDetectorRef,public servUtils:ServUtilitiesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.cdr.detectChanges();
  }
}
