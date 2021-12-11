using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dogify.api.DataAccess
{
    public class MessageRepository
    {
        readonly string _connectionString;
        public MessageRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Dogify");
        }
    }
}
