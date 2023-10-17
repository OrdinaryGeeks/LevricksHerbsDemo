import { SafeResourceUrl } from "@angular/platform-browser";

export class BioBlurb {

      public ID: number;
      

      public MediaLink: string;
  public Height: number;
  public Width: number;
  public Image: boolean;
  public Video: boolean;
      public Text: string;
  public BioID: number;
  public mediaTop: boolean;
  public mediaBottom: boolean;
  public mediaLeft: boolean;
  public mediaRight: boolean;
  public safeMediaLink: SafeResourceUrl;
  public Title: string;
  constructor(ID: number, MediaLink: string, Height: number, Width: number,
    Image: boolean, Video: boolean, Text: string, BioID: number, Top: boolean, Bottom: boolean,
    Left: boolean, Right: boolean, safeMediaLink:'', Title:string) {

    this.safeMediaLink = safeMediaLink;
    this.mediaBottom = Bottom;
    this.mediaLeft = Left;
    this.mediaRight = Right;

    this.mediaTop = Top;
    this.ID = ID;
    this.MediaLink = MediaLink;
    this.Width = Width;
    this.Height = Height;
    this.Image = Image;
    this.Video = Video;
    this.Text = Text;
    this.BioID = BioID;
    this.Title = Title;
  }
}
