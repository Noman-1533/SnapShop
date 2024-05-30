import { AfterViewInit, Component } from '@angular/core';
import { Carousel, initMDB } from "mdb-ui-kit";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    initMDB();  // Initialize MDB components
    new Carousel(document.querySelector('.carousel'));
  }

}
