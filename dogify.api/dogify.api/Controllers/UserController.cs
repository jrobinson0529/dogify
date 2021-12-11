using dogify.api.DataAccess;
using dogify.api.Models;
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
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_userRepo.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult GetSingleUser(Guid id)
        {
            var user = _userRepo.GetUserById(id);

            if (user is null) return NotFound($"No user with id - {id} exists in the database");

            return Ok(user);
        }
        [HttpPost]
        public IActionResult AddSingleUser(User user)
        {
            // We potentially want to add checks here to make sure the relevant user information is filled out such as
            _userRepo.Add(user);
            return Created($"/users/{user.Id}", user);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateUser(Guid id, User user)
        {
            var userToUpdate = _userRepo.GetUserById(id);
            if (userToUpdate is null) return NotFound($"No user with id - {id} exists in the database");

            var updatedUser = _userRepo.Update(id, user);
            return Ok(updatedUser);
        }
    }
}
