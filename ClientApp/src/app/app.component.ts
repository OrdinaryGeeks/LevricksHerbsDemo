import { Component } from '@angular/core';
import { AdminpageService } from './adminpage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private adminPageService: AdminpageService) {
   // alert("Constructor");
    // this.adminPageService.initialLoad();
  }
  providers: [AdminpageService];

  ngOnInit(): void {


    //this.adminPageService.initialLoad();

  //  this.adminPageService.getBio();
    
  }
}

