using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dogify.api.Models
{
    public class Message
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string messageText { get; set; }
        public DateTime messageTime { get; set; }
    }
}
