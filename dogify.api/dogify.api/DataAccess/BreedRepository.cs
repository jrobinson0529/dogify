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
    public class BreedRepository
    {
        readonly string _connectionString;
        public BreedRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Dogify");
        }

        internal object GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Breeds";
            var breed = db.Query<Breed>(sql);
            return breed;
        }

        internal object GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Breeds
                        WHERE id = @id";
            var breed = db.QuerySingleOrDefault<Breed>(sql, new { id });
            return breed;
        }
    }
}
