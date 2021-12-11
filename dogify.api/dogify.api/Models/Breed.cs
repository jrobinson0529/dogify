using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dogify.api.Models
{
    public class Breed
    {
        public Guid Id { get; set; }
        public Guid IncompatibleBreedId { get; set; }
        public string BreedTitle { get; set; }
        public string ImageUrl { get; set; }
    }
}
