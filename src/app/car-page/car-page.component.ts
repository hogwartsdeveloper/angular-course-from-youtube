import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
  id: number = 0;
  name: string = '';
  year: number = 0;
  color: string = '';
  hash: string | null = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.year = +this.route.snapshot.queryParams['year'];
    this.color = this.route.snapshot.queryParams['color'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params) => {
      this.color = params['color'];
      this.year = +params['year'];
    })

    this.route.fragment.subscribe((fragment) => {
      this.hash = fragment;
    })
  }

  openMazda(): void {
    this.router.navigate(['/cars', 8, 'Mazda'], {
      queryParams: {
        year: 2019,
        color: 'pink'
      },
      fragment: 'picobu'
    })
  }

}
