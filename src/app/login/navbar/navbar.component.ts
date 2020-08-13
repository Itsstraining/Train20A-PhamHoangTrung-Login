import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public service:LoginServiceService) { }

  ngOnInit(): void {
  }

}
