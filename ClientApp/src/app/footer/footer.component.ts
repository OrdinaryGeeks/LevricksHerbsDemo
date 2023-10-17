import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AdminpageService } from '../adminpage.service';
import { Bio } from '../bio.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  bio: Bio;
  facebook: string = '';
  instagram: string = '';
  snapChat: string = '';
  youtube: string = '';

  isFB: boolean = false;
  isYT: boolean = false;
  isSC: boolean = false;
  isIG: boolean = false;


  adminPageSubscription: any;
  constructor(private adminPageService: AdminpageService) {
    this.adminPageSubscription = this.adminPageService.bioChanged.subscribe(bio => {

      this.facebook = bio.FBLink;
      this.instagram = bio.IGLink;
      this.snapChat = bio.SnapLink;
      this.youtube = bio.YoutubeLink;

      if (this.facebook.length > 5) {
       
        this.isFB = true;
      }
      else
        this.isFB = false;
      if (this.instagram.length > 5)
        this.isIG = true;
      else
        this.isIG = false;
      if (this.snapChat.length > 5) {
        this.isSC = true;
           }
      else
        this.isSC = false;
      if (this.youtube.length > 5) {
        this.isYT = true;

      }
      else
        this.isYT = false;
    });
    if (this.adminPageService.hasBio) {
      this.bio = this.adminPageService.Bio;

      this.facebook = this.bio.FBLink;
      this.instagram = this.bio.IGLink;
      this.snapChat = this.bio.SnapLink;
      this.youtube = this.bio.YoutubeLink;

      if (this.facebook.length > 5) {
     
        this.isFB = true;
      }
      else
        this.isFB = false;
      if (this.instagram.length > 5)
        this.isIG = true;
      else
        this.isIG = false;
      if (this.snapChat.length > 5) {
        this.isSC = true;

      }
      else
        this.isSC = false;
      if (this.youtube.length > 5) {
        this.isYT = true;

      }
      else
        this.isYT = false;



    }
   
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.adminPageSubscription.unsubscribe();
  }
}
