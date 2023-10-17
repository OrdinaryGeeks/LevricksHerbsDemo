using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LevricksHerbsDemo.Models;

namespace LevricksHerbsDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingVideosController : ControllerBase
    {
        private readonly DBContext _context;

        public TrainingVideosController(DBContext context)
        {
            _context = context;
        }

        // GET: api/TrainingVideos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainingVideo>>> GetTrainingVideos()
        {
            return await _context.TrainingVideos.ToListAsync();
        }

        // GET: api/TrainingVideos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingVideo>> GetTrainingVideo(int id)
        {
            var trainingVideo = await _context.TrainingVideos.FindAsync(id);

            if (trainingVideo == null)
            {
                return NotFound();
            }

            return trainingVideo;
        }

        // PUT: api/TrainingVideos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingVideo(int id, TrainingVideo trainingVideo)
        {
            if (id != trainingVideo.ID)
            {
                return BadRequest();
            }

            _context.Entry(trainingVideo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingVideoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TrainingVideos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TrainingVideo>> PostTrainingVideo(TrainingVideo trainingVideo)
        {
            _context.TrainingVideos.Add(trainingVideo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainingVideo", new { id = trainingVideo.ID }, trainingVideo);
        }

        // DELETE: api/TrainingVideos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainingVideo(int id)
        {
            var trainingVideo = await _context.TrainingVideos.FindAsync(id);
            if (trainingVideo == null)
            {
                return NotFound();
            }

            _context.TrainingVideos.Remove(trainingVideo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainingVideoExists(int id)
        {
            return _context.TrainingVideos.Any(e => e.ID == id);
        }
    }
}
