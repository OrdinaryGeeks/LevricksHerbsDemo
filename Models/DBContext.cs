using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevricksHerbsDemo.Models
{
    public class DBContext : DbContext
    {


        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }


        public DbSet<Admin> Admins { get; set; }
        public  DbSet<Bio> Bios { get; set; }
        public DbSet<Blurb> Blurbs { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Training> Trainings { get; set; }
        public DbSet<TrainingVideo> TrainingVideos { get; set; }

    }
}
