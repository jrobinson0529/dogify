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
        public IActionResult Index()
        {
            return Ok();
        }
    }
}

