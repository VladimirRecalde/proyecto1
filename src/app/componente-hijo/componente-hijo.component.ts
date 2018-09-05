import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() title: string;
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public buttonWasClicked() {
    this.onClick.emit(" invoca a app-componente-hijo  buttonWasClicked");
  } 
}
