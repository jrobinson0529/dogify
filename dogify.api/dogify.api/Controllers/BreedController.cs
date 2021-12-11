using dogify.api.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dogify.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BreedController : ControllerBase
    {
        BreedRepository _breedRepo;
        public BreedController(BreedRepository breedRepo)
        {
            _breedRepo = breedRepo;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return Ok(_breedRepo.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult GetSingleBreed(Guid id)
        {
            var breed = _breedRepo.GetById(id);

            if (breed is null) return NotFound($"No user with id - {id} exists in the database");

            return Ok(breed);
        }
    }
}

