using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevricksHerbsDemo.Models
{
    public class Product
    {
        //page for displaying items

        public int ID { get; set; }
        public Blurb Blurb { get; set; }
   

        public virtual ICollection<Item> items { get; set; }
    }
}
