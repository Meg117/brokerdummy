using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication5.Models;

namespace WebApplication5
{
    public class BrokerContext: DbContext
    {
        public BrokerContext(DbContextOptions options)
          : base(options)
        {

        }

        public DbSet<Broker> Broker { get; set; }
    }
}
