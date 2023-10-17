using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevricksHerbsDemo.Models
{
    public class Bio
    {
        public int ID { get; set; }
        //Hold social media links for bio and footer
        public string FBLink { get; set; }
        public string IGLink { get; set; }
        public string SnapLink { get; set; }
        public string YoutubeLink { get; set; }

        //A blurb consists of an orientation, and optional media and text
        public virtual ICollection<Blurb> blurbs { get; set; }
    }
}
