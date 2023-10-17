
import { Component, OnInit } from '@angular/core';
import { transitionAnimation, spinAnimation } from '../animations';

import { DomSanitizer } from '@angular/platform-browser';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation

} from '@angular/animations';
import { AdminpageService } from '../adminpage.service';
import { BioBlurb } from '../bio-blurb.model';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-bio',
  animations: [

    trigger('enterView', [
      transition(':enter', [
        style({transform:'rotate(0deg)', fontSize:'30px', color: 'Red' }),
      animate('5000ms', style({ transform:'rotate(1080deg)', fontSize:'90px', color: 'Purple' })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  
        
    trigger('newClick',[
      state('clicked', style({
        transform: 'rotate(720deg)'
      })),
      state('unbothered', style({
        transform: 'rotate(0)'
      })),        
      transition('unbothered => clicked', [
        animate('1.0s')])
    ])
    ],
    
    
         
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  isShown: boolean = false;

  BioBlurbs: BioBlurb[] = [];

  adminPageSubscription: any;
  bioBlurbsSubscription: any;
  constructor(private adminPageService: AdminpageService, private sanitizer: DomSanitizer) {
   

    this.bioBlurbsSubscription = this.adminPageService.bioBlurbsChanged.subscribe((blurbs:BioBlurb[]) => {

      blurbs.forEach(x => this.Sanitize(x));

        this.BioBlurbs = blurbs;
        alert("BioBLurbs updated");
      })


    this.BioBlurbs = this.adminPageService.BioBlurbs;
    
    this.BioBlurbs.forEach(x => this.Sanitize(x));
  }
  Sanitize(blurb: BioBlurb) {

    blurb.safeMediaLink = this.sanitizer.bypassSecurityTrustResourceUrl(blurb.MediaLink);


  }

  ngOnInit() {
    this.isShown = true;
  }

}
