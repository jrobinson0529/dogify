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
    public class MessageController : ControllerBase
    {
        MessageRepository _messageRepo;
        public MessageController(MessageRepository messageRepo)
        {
            _messageRepo = messageRepo;
        }
        public IActionResult Index()
        {
            return Ok();
        }
    }
}

