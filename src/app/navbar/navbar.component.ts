import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCurtainActive:boolean= false;
  isCurtainHidden:boolean= true;

  toggleCurtain():void{
    if(this.isCurtainActive){
      //If curtain is already active, we let the transition from active to inactive happen
      //then we hide the curtain.
      this.isCurtainActive = !this.isCurtainActive;
      setTimeout(()=>this.isCurtainHidden = !this.isCurtainHidden, 250);
    }else{
      //If curtain is inactive, we make it visible first and after a quick time
      //we let the transition happen
      this.isCurtainHidden = !this.isCurtainHidden;
      setTimeout(()=>this.isCurtainActive = !this.isCurtainActive, 50);

    }
  }

}
