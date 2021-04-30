import { Component, OnInit } from '@angular/core';
import { faBell, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.css']
})
export class NevigationComponent  {

  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
}
