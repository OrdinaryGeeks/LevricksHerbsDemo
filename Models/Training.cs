using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevricksHerbsDemo.Models
{
    public class Training
    {

        public int ID { get; set; }
        public Blurb Blurb { get; set; }

        public virtual ICollection<TrainingVideo> TrainingVideos { get; set; }
    }
}
