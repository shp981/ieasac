
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html'})
export class NavbarComponent {
  menuOpen=false;

  toggleMenu(){
    this.menuOpen=!this.menuOpen;

    
  }
  
  get myStyles() {
    return {
      'top': this.menuOpen ? '80px' : '-400px',
    };
  }
  
   
}
