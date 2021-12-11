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
    public class UserRepository
    {
        readonly string _connectionString;
        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Dogify");
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"SELECT * FROM Users";
            var users = db.Query<User>(sql);
            return users;
        }

        internal User GetUserById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Users
                        WHERE id = @id";
            var user = db.QuerySingleOrDefault<User>(sql, new { id });
            return user;
        }

        internal Guid Add(User user)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT INTO Users(ImageUrl, Username, GoogleId, BreedId)
                        OUTPUT INSERTED.id
                        VALUES(@imageUrl, @username, @googleId, @breedId)";
            var id = db.ExecuteScalar<Guid>(sql, user);
            user.Id = id;

            return id;
        }
        internal User Update(Guid id, User userToUpdate)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @" UPDATE Users
                         SET ImageUrl = @ImageUrl,
                         Username = @Username,
                         BreedId = @BreedId
                         OUTPUT INSERTED.*
                         WHERE Id = @Id
                        ";

            userToUpdate.Id = id;
            var updatedUser = db.QuerySingleOrDefault<User>(sql, userToUpdate);
            return updatedUser;
        }
    }
}
