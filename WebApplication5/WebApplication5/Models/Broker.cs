using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication5.Models
{
    public class Broker
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long brokersId { get; set; }
        public string brokerName { get; set; }
        public string email { get; set; }
        public string city { get; set; }
        public string state{ get; set; }
        public string add1{ get; set; }
        public string add2{ get; set; }
        public long commission { get; set; }
        public long isActive { get; set; }

    }
}
