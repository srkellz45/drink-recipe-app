import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'


@Component({
  selector: 'app-spirit-page',
  templateUrl: './spirit-page.component.html',
  styleUrls: ['./spirit-page.component.css']
})
export class SpiritPageComponent implements OnInit {
  spiritName: string = "whisky";

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {

  }

  backClick() {
    this.location.back();
  }

  changePage(spirit) {
    this.spiritName = spirit;
    console.log(this.spiritName);
    this.router.navigate([`category/${this.spiritName}`]);
  }


}
