import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://i.pinimg.com/originals/02/24/c8/0224c822ea6ce2f4e6d35ad000cc3300.jpg";
  contentTitle: string = "Minha pagina";
  contentDescription: string = "Olá mundo";

  constructor() { }

  ngOnInit(): void {
  }

}
