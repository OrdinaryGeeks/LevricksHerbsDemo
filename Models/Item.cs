using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevricksHerbsDemo.Models
{
    public class Item
    {

        public int ID { get; set; }

        //orientation = side by side, on top of , below,
        public string Orientation { get; set; }
        public string MediaLink { get; set; }
        public string MediaDimensions { get; set; }
        public string MediaType { get; set; }
        public string Text { get; set; }
        public int Cost { get; set; }
        public string Description { get; set; }

    }
}
