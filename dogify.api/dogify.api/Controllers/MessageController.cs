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
    public class MessageController : ControllerBase
    {
        MessageRepository _messageRepo;
        public MessageController(MessageRepository messageRepo)
        {
            _messageRepo = messageRepo;
        }
        [HttpGet]
        public IActionResult GetRecentMessages()
        {
            return Ok(_messageRepo.GetRecent());

        }
        [HttpPost]
        public IActionResult AddMessage(Message message)
        {
            _messageRepo.Add(message);
            return Created($"/Messages/{message.Id}", message);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateMessage(Guid id, Message message)
        {
            var messageToUpdate = _messageRepo.GetMessageById(id);
            if (messageToUpdate is null) return NotFound($"No user with id - {id} exists in the database");

            var updatedMessage = _messageRepo.Update(id, message);
            return Ok(updatedMessage);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteMessage(Guid id)
        {
            var messageToRemove = _messageRepo.GetMessageById(id);
            if (messageToRemove is null) return NotFound($"No robot with id - {id} exists in the database");

            return Ok(_messageRepo.RemoveMessage(id));
        }
    }
}

