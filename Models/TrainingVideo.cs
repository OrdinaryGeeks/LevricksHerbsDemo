using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevricksHerbsDemo.Models
{
    public class TrainingVideo
    {
        public int ID { get; set; }
        public string MusclePartList { get; set; }
        public Blurb blurb { get; set; }
    }
}
