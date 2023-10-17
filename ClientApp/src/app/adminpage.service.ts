/// <reference path="bio.model.ts" />
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BioBlurb } from './bio-blurb.model';
import { Bio } from './bio.model';

const restUrl = 'https://www.alectosinterdimensionalblog.com/LevricksHerbiary/api/';

@Injectable({
  providedIn: 'root'
})

export class AdminpageService {

  constructor(private httpClient: HttpClient) {
    this.initialLoad();
   // if (this.hasBio())
     // this.Bio = this.getBio();
   // alert(this.Bio.FBLink + " service");
      }

  Bio: Bio = { FBLink: '', IGLink: '', SnapLink: '', YoutubeLink: '', ID: 0, Title: '' }
  Bios: Bio[] = [];

  //Bio
  facebook: string = '';
  instagram: string = '';
  snapChat: string = '';
  youtube: string = '';
  id: number = 0;

  //Bio Blurb
  bioBlurbID: number = 0;
  bioBlurbOrientation: string = '';
  bioBlurbMediaLink: string = '';
  bioBlurbMediaDimensions: string = '';
  bioBlurbMediaType: string = '';
  bioBlurbText: string = '';
  bioBlurbBioID: number = 1;

  BioBlurbIndex: number = 1;

  //Bio Blurb Orientation
  mediaTop: boolean = true;
  mediaBottom: boolean = false;
  mediaLeft: boolean = false;
  mediaRight: boolean = false;

  mediaHeight: number;
  mediaWidth: number;

  bioBlurbIndex = 1;

  BioBlurbs: BioBlurb[] = [];

  getBios(): Observable<Bio[]> {
    return this.httpClient.get<Bio[]>(restUrl + 'bios');
  }

  getBio(): Bio {
    this.getBios().subscribe(bios => console.log(bios))

    this.httpClient.get<Bio>(restUrl + 'bios/1').subscribe(bio => this.Bio = bio);
  //  alert(this.Bio.FBLink + " fbid " + this.Bio.ID);
    if (this.Bios.length > 0) {
     // alert(this.Bio.FBLink + " fbid " + this.Bio.ID);
      return this.Bios[0];

    }
    else
      return this.Bio;
  }

  initialLoad() {

    alert("IL APS");
    this.httpClient.get<Bio>('https://www.alectosinterdimensionalblog.com/levricksherbiary/api/bios/1')
      .subscribe((bio: any) => {
        this.Bio = {
          FBLink: bio.fbLink,
          IGLink: bio.igLink,
          SnapLink: bio.snapLink,
          YoutubeLink: bio.youtubeLink,
          ID: bio.id,
          Title: bio.title

        }; this.emitBio();
      });
    // https://stackoverflow.com/questions/53416115/angular-6-httpclient-using-map
    this.httpClient.get<BioBlurb[]>('https://www.alectosinterdimensionalblog.com/levricksherbiary/api/bioBlurbs/')
      .pipe(map((blurbs) => {
        alert("In BB Map");
        for (let blurb of (blurbs as Array<any>)) {
          this.BioBlurbs.push({
            ID: blurb.id,  MediaLink: blurb.mediaLink, Height: blurb.height,
            Width: blurb.width, Text: blurb.text, BioID: blurb.bioID, mediaTop: false,
            mediaBottom: true,
            mediaLeft: false,
            mediaRight: false,
            Image: blurb.image,
            Video: blurb.video,
            safeMediaLink: '',
            Title: blurb.title
          });
          this.BioBlurbIndex = blurb.id;
        }
      }
      )).subscribe(
        x => {
          console.log("emit bb"); this.emitBioBlurb();
        }
      )



    alert("Initial Load finished aPS");
  }

  @Output() bioChanged: EventEmitter<Bio> = new EventEmitter<Bio>();
  @Output() bioBlurbsChanged: EventEmitter<BioBlurb[]> = new EventEmitter<BioBlurb[]>();


  hasBio(): boolean {

    this.getBios().subscribe(x => { this.Bios = x; });
    if (this.Bios.length >= 1) {
      return true;
    }
    else {
      return false;
    }
  }

  emitBio() {

    this.bioChanged.emit(this.Bio);
  }
  emitBioBlurb() {
    this.bioBlurbsChanged.emit(this.BioBlurbs);
  }

  saveBioBlurb(Height, Width, Top, Bottom, Left, Right,Image, Video, bBlurbMediaLink,  bBlurbText, title) {

    
    var postJson = JSON.stringify({
      
      Height: Height,
      Width: Width,
      mediaTop: Top,
      mediaBottom: Bottom,
      mediaLeft: Left,
      mediaRight: Right,
      MediaLink: bBlurbMediaLink,
      Image: Image,
      Video: Video,
      Text: bBlurbText,
      BioID:  1
    })

    this.BioBlurbs.push({
      ID: this.bioBlurbIndex++,
      MediaLink: bBlurbMediaLink,
      Height: Height,
      Width: Width,
      Image: Image,
      Video: Video,
      Text: bBlurbText,
      BioID: 1,
      mediaTop: Top,
      mediaBottom: Bottom,
      mediaLeft: Left,
      mediaRight: Right,
      safeMediaLink: '',
      Title: title
    })


    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   

    this.httpClient
      .post<any>(restUrl + 'bioblurbs/', postJson, { headers }).subscribe(x => { console.log('hello') });


    this.bioBlurbsChanged.emit(this.BioBlurbs);
  }

  saveEditedBioBlurb(ID, Height, Width, Top, Bottom, Left, Right, Image, Video, bBlurbMediaLink, bBlurbText, title) {

    var putJson = JSON.stringify({

      Height: Height,
      Width: Width,
      mediaTop: Top,
      mediaBottom: Bottom,
      mediaLeft: Left,
      mediaRight: Right,
      MediaLink: bBlurbMediaLink,
      Image: Image,
      Video: Video,
      Text: bBlurbText,
      BioID: 1
    })

    this.BioBlurbs[ID] = ({
      ID: ID,
      MediaLink: bBlurbMediaLink,
      Height: Height,
      Width: Width,
      Image: Image,
      Video: Video,
      Text: bBlurbText,
      BioID: 1,
      mediaTop: Top,
      mediaBottom: Bottom,
      mediaLeft: Left,
      mediaRight: Right,
      safeMediaLink: '',
      Title: title
    })

    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const httpOptions = { headers: headers };

    this.httpClient
      .put<any>(restUrl + 'bioblurbs/'+ID, putJson, { headers }).subscribe(x => { console.log('hello') });

    this.bioBlurbsChanged.emit(this.BioBlurbs);
  }
  changeBioInformation(facebook: string, instagram: string, snapChat: string, youtube: string, title:string) {


    var hasBioBool = this.hasBio();
    
    this.Bio = {
      FBLink: facebook,
      IGLink: instagram,
      SnapLink: snapChat,
      YoutubeLink: youtube,
      ID: 1,
      Title: title
    }
    if (!hasBioBool) {

  

      var postJson = JSON.stringify({
        FBLink: facebook,
        IGLink: instagram,
        SnapLink: snapChat,
        YoutubeLink: youtube,
        Title: title
      })


      var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
      this.httpClient
        .post<any>(restUrl + 'bios/', postJson, { headers }).subscribe(x => { console.log('hello') });

      this.bioChanged.emit(this.Bio);
     
    }

    else {



      var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      var putJson = JSON.stringify({
        FBLink: facebook,
        IGLink: instagram,
        SnapLink: snapChat,
        YoutubeLink: youtube,
        Title: title
      })
      this.httpClient.put<Bio>(restUrl + 'bios/' + this.Bio.ID, putJson, { headers })
        .subscribe(x => console.log(x.FBLink));

      this.bioChanged.emit(this.Bio);


    }
   

  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }


}


