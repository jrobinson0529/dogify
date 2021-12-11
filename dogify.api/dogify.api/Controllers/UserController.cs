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
    public class UserController : ControllerBase
    {
        UserRepository _userRepo;
        public UserController(UserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        public IActionResult Index()
        {
            return Ok();
        }
    }
}
