import { Component, OnInit, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
