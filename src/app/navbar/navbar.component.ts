import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCurtainActive:boolean= false;
  isCurtainContainerActive:boolean= false;

  toggleCurtain():void{
    this.isCurtainActive = !this.isCurtainActive; // Toggle the boolean value
    setTimeout(()=>this.isCurtainContainerActive = !this.isCurtainContainerActive, 1000);
  }

}
