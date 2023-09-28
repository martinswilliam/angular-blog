import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  smallCardImg1 = ""

  @Input()
  smallCardTitle1 = ""

  @Input()
  smallCardDescription1 = ""

  @Input()
  smallCardImg2 = ""

  @Input()
  smallCardTitle2 = ""

  @Input()
  smallCardDescription2 = ""

  @Input()
  smallCardImg3 = ""

  @Input()
  smallCardTitle3 = ""

  @Input()
  smallCardDescription3 = ""

  constructor() { }

  ngOnInit(): void {
  }

}
