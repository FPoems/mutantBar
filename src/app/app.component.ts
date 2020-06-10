import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mutantSidebarDiv';
  opened = false;




  openSidebar() {
  this.opened = ! this.opened;
  //console.log('value : ' + this.opened);
  }

}
