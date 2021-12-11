using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dogify.api.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string GoogleId { get; set; }
        public string ImageUrl { get; set; }
        public string Username { get; set; }
        public Guid BreedId { get; set; }
    }
}
