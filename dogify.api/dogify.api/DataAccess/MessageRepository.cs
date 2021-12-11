using Dapper;
using dogify.api.Models;
using Microsoft.Data.SqlClient;
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

        internal IEnumerable<Message> GetRecent()
        {
            using var db = new SqlConnection(_connectionString);

            // Here we are specifying to grab users where there is a username because 'deleted' users will have a null username
            var sql = @"SELECT TOP 10 * From Messages
                        ORDER BY Messages.MessageTime desc";
            var users = db.Query<Message>(sql);
            return users;
        }

        internal void Add(Message message)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT INTO Messages(UserId, MessageText, MessageTime)
                        OUTPUT INSERTED.Id
                        VALUES(@UserId, @MessageText, @MessageTime)";
            var id = db.ExecuteScalar<Guid>(sql, message);
            message.Id = id;
        }

        internal object GetMessageById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Messages
                        WHERE Id = @id";
            var message = db.QuerySingleOrDefault<Message>(sql, new { id });
            return message;
        }

        internal string RemoveMessage(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Messages WHERE Id = @id";
            db.Execute(sql, new { id });
            return "Success";
        }

        internal object Update(Guid id, Message messageToUpdate)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @" UPDATE Messages
                         SET MessageText = @MessageText
                         OUTPUT INSERTED.*
                         WHERE id = @Id
                        ";
            messageToUpdate.Id = id;
            var updatedMessage = db.QuerySingleOrDefault<Message>(sql, messageToUpdate);
            return updatedMessage;
        }
    }
}
