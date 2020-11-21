import { Component, Input,  OnInit } from "@angular/core";


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styles: []
})

export class rentalListComponent implements OnInit {
  @Input() rentalList;
  ngOnInit() {

  }
}