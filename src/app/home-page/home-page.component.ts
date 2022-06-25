import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
  }

  openCarsPage(): void {
    this.router.navigate(['cars'], {relativeTo: this.route});
  }

  changeAuthStatus(status: string) {
    switch (status) {
      case 'login':
        this.authService.logIn();
        break;
      case 'logout':
        this.authService.logOut();
        break;
    }
  }
}
