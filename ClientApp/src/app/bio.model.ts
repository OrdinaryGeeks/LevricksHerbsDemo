export class Bio {



        //Hold social media links for bio and footer
  public FBLink: string;
  public IGLink: string;
  public SnapLink: string;
  public YoutubeLink: string;
  public ID: number;
  public Title: string;

  constructor(FBLink: string, IGLink: string, SnapLink: string, YoutubeLink: string, ID: number, Title: string) {

    this.FBLink = FBLink;
    this.IGLink = IGLink;
    this.SnapLink = SnapLink;
    this.YoutubeLink = YoutubeLink;
    this.ID = 0;
    this.Title = Title;


  }
}
