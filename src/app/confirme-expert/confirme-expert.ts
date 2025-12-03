import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirme-expert',
  imports: [],
  templateUrl: './confirme-expert.html',
  styleUrl: './confirme-expert.css'
})
export class ConfirmeExpert {

  constructor(private router : Router){}

  retour(){
    this.router.navigateByUrl('create-expert')
  }
}
