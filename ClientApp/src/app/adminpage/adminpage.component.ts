import { Component, OnInit } from '@angular/core';
import { AdminpageService } from '../adminpage.service';
import { BioBlurb } from '../bio-blurb.model';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  facebook: string = '';
  instagram: string = '';
  snapchat: string = '';
  youtube: string = '';
  title: string = '';

 
  
  BioBlurbs: BioBlurb[];

  changeBio: boolean = false;
  addBioBlurb: boolean = false;
  editBioBlurbs: boolean = false;
  listBioBlurbs: boolean = false;
  bioBlurbID: string = '';
  bioBlurbOrientation: string = '';
  bioBlurbMediaLink: string = '';
  bioBlurbWidth: number = 0;
  bioBlurbHeight: number = 0;
  bioBlurbImage: boolean = true;
  bioBlurbVideo: boolean = false;
  bioBlurbTop: boolean = true;
  bioBlurbBottom: boolean = false;
  bioBlurbLeft: boolean = false;
  bioBlurbRight: boolean = false;
  bioBlurbMediaType: string = '';
  bioBlurbText: string = '';
  bioBlurbBioID: number = 1;
  bioBlurbTitle: string = '';
  bbImage: boolean = false;
  bbVideo: boolean = false;

  bbMediaType: number = 0;
  bbOrientation: number = 0;



  editBioBlurbID: string = '';
  editBioBlurbOrientation: string = '';
  editBioBlurbMediaLink: string = '';
  editBioBlurbWidth: number = 0;
  editBioBlurbHeight: number = 0;
  editBioBlurbImage: boolean = true;
  editBioBlurbVideo: boolean = false;
  editBioBlurbTop: boolean = true;
  editBioBlurbBottom: boolean = false;
  editBioBlurbLeft: boolean = false;
  editBioBlurbRight: boolean = false;
  editBioBlurbMediaType: string = '';
  editBioBlurbText: string = '';
  editBioBlurbBioID: number = 1;
  editBioBlurbTitle: string = '';


  editBBImage: boolean = false;
  editBBVideo: boolean = false;

  editBBMediaType: number = 0;
  editBBOrientation: number = 0;
  bioChangedSubscription: any;
  bioBlurbsSubscription: any;
  constructor(private adminPageService: AdminpageService) {

    this.bioChangedSubscription = adminPageService.bioChanged.subscribe((bio) => {
      this.facebook = bio.FBLink;
      this.instagram = bio.IGLink;
      this.snapchat = bio.SnapLink;
      this.youtube = bio.YoutubeLink;
      this.title = bio.Title;
    });

    this.bioBlurbsSubscription = this.adminPageService.bioBlurbsChanged.subscribe((blurbs: BioBlurb[]) => {

      
      this.BioBlurbs = blurbs;
      
    })

  
    
    this.facebook = this.adminPageService.Bio.FBLink;
    this.instagram = this.adminPageService.Bio.IGLink;
    this.snapchat = this.adminPageService.Bio.SnapLink;
    this.youtube = this.adminPageService.Bio.YoutubeLink;
    this.title = this.adminPageService.Bio.Title;
    this.BioBlurbs = this.adminPageService.BioBlurbs;
    
  }

  ngOnInit() {
  }

  onBBMediaTypeChange(index) {
    this.bbMediaType = index;
    if (index == 1) {
      this.bioBlurbVideo = false;
      this.bioBlurbImage = true;
    }
    if (index == 2) {
      this.bioBlurbImage = false;
      this.bioBlurbVideo = true;
    }
  }
  onBBOrientationSelect(index) {
    this.bbOrientation = index;
    if (index == 1) {
      this.bioBlurbLeft = true;
      this.bioBlurbRight = false;
      this.bioBlurbTop = false;
      this.bioBlurbBottom = false;
    }

    if (index == 2) {
      this.bioBlurbLeft = false;
      this.bioBlurbRight = true;
      this.bioBlurbTop = false;
      this.bioBlurbBottom = false;
    }

    if (index == 3) {
      this.bioBlurbLeft = false;
      this.bioBlurbRight = false;
      this.bioBlurbTop = true;
      this.bioBlurbBottom = false;
    }

    if (index == 4) {
      this.bioBlurbLeft = false;
      this.bioBlurbRight = false;
      this.bioBlurbTop = false;
      this.bioBlurbBottom = true;
    }
  }


  oneditBBMediaTypeChange(index) {
    this.editBBMediaType = index;
    if (index == 1) {
      this.editBioBlurbVideo = false;
      this.editBioBlurbImage = true;
    }
    if (index == 2) {
      this.editBioBlurbImage = false;
      this.editBioBlurbVideo = true;
    }
  }
  oneditBBOrientationSelect(index) {
    this.editBBOrientation = index;
    if (index == 1) {
      this.editBioBlurbLeft = true;
      this.editBioBlurbRight = false;
      this.editBioBlurbTop = false;
      this.editBioBlurbBottom = false;
    }

    if (index == 2) {
      this.editBioBlurbLeft = false;
      this.editBioBlurbRight = true;
      this.editBioBlurbTop = false;
      this.editBioBlurbBottom = false;
    }

    if (index == 3) {
      this.editBioBlurbLeft = false;
      this.editBioBlurbRight = false;
      this.editBioBlurbTop = true;
      this.editBioBlurbBottom = false;
    }

    if (index == 4) {
      this.editBioBlurbLeft = false;
      this.editBioBlurbRight = false;
      this.editBioBlurbTop = false;
      this.editBioBlurbBottom = true;
    }
  }

  toggleAddBioBlurb() {

    if (this.addBioBlurb)
      this.addBioBlurb = false;
    else if (!this.addBioBlurb)
      this.addBioBlurb = true;

  }
  toggleChangeBio() {

    if (this.changeBio)
      this.changeBio= false;
    else if (!this.changeBio)
      this.changeBio = true;
  }


  toggleListBioBlurbs() {
    if (this.listBioBlurbs)
      this.listBioBlurbs = false;
    else if (!this.listBioBlurbs) {
      this.listBioBlurbs = true;

    }
  }

  toggleEditBioBlurbs() {
    if (this.editBioBlurbs)
      this.editBioBlurbs = false;
    else if (!this.editBioBlurbs) {
      this.editBioBlurbs = true;
      
    }
  }
  changeBioInformation() {

    this.adminPageService.changeBioInformation(this.facebook, this.instagram, this.snapchat, this.youtube, this.title);
    
  }

  saveBioBlurb() {
    this.adminPageService.saveBioBlurb(this.bioBlurbHeight, this.bioBlurbWidth, this.bioBlurbTop, this.bioBlurbBottom, this.bioBlurbLeft, this.bioBlurbRight, this.bioBlurbImage, this.bioBlurbVideo, this.bioBlurbMediaLink, this.bioBlurbText, this.bioBlurbTitle);

  }

  cancelEditBioBlurb() {
    this.editBioBlurbs = false;

    this.editBioBlurbID = '';
    this.editBioBlurbOrientation = '';
    this.editBioBlurbMediaLink = '';
    this.editBioBlurbWidth = 0;
    this.editBioBlurbHeight = 0;
    this.editBioBlurbImage = false;
    this.editBioBlurbVideo = false;
    this.editBioBlurbTop = false;
    this.editBioBlurbBottom = false;
    this.editBioBlurbLeft = false;
    this.editBioBlurbRight = false;
    this.editBioBlurbMediaType = '';
    this.editBioBlurbText = '';
    this.editBioBlurbBioID = 1;
    this.editBioBlurbTitle = '';
    this.editBBMediaType = 0;
    this.editBBOrientation = 0;
  }
  editBioBlurb(blurb : BioBlurb) {


    this.editBioBlurbs = true;

    this.editBioBlurbID = blurb.ID.toString();
    this.editBioBlurbOrientation = '';
    this.editBioBlurbMediaLink = blurb.MediaLink;
    this.editBioBlurbWidth = blurb.Width;
    this.editBioBlurbHeight = blurb.Height;
    this.editBioBlurbImage = blurb.Image;
    this.editBioBlurbVideo = blurb.Video;
    this.editBioBlurbTop = blurb.mediaTop;
    this.editBioBlurbBottom = blurb.mediaBottom;
    this.editBioBlurbLeft = blurb.mediaLeft;
    this.editBioBlurbRight = blurb.mediaRight;
    this.editBioBlurbMediaType = '';
    this.editBioBlurbText = blurb.Text;
    this.editBioBlurbBioID = 1;
    this.editBioBlurbTitle = blurb.Title;


    if (blurb.Image == true) {
      this.editBBImage = true;
      this.editBBVideo = false;
      this.editBBMediaType = 1;

    }
    else {
      this.editBBVideo = true;
      this.editBBImage = false;
      this.editBBMediaType = 2;
    }

    if (this.editBioBlurbLeft) {
      this.editBBOrientation = 1;
    }

    if (this.editBioBlurbRight) {
      this.editBBOrientation = 2;
    }
    if (this.editBioBlurbTop) {
      this.editBBOrientation = 3;
    }
    if (this.editBioBlurbBottom) {
      this.editBBOrientation = 4;
    }

  }


  saveEditedBioBlurb() {
    this.adminPageService.saveEditedBioBlurb(this.bioBlurbID, this.bioBlurbHeight, this.bioBlurbWidth, this.bioBlurbTop, this.bioBlurbBottom, this.bioBlurbLeft, this.bioBlurbRight, this.bioBlurbImage, this.bioBlurbVideo, this.bioBlurbMediaLink, this.bioBlurbText, this.bioBlurbTitle);

  }

}
