using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication5.Models;
using WebApplication5.Models.Repository;

namespace WebApplication5.Controllers
{
    [Route("api/Broker")]
    [ApiController]
    public class BrokerController : ControllerBase
    { 
        private readonly IDataRepository<Broker> _dataRepository;
    public BrokerController(IDataRepository<Broker> dataRepository)
    {
        _dataRepository = dataRepository;
    }
    

        // GET: api/Broker
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Broker> broker = _dataRepository.GetAll();
            return Ok(broker);
        }

        // GET: api/Broker/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(long id)
        {
            Broker broker = _dataRepository.Get(id);

            if (broker == null)
            {
                return NotFound("The Broker record couldn't be found.");
            }

            return Ok(broker);
        }

        // POST: api/Broker
        [HttpPost]
        public IActionResult Post([FromBody] Broker broker)
        {
            if (broker == null)
            {
                return BadRequest("Broker is null.");
            }

            _dataRepository.Add(broker);
            return CreatedAtRoute(
                  "Get",
                  new { Id = broker.brokersId },
                  broker);
        }

        // PUT: api/Broker/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Broker broker)
        {
            if (broker == null)
            {
                return BadRequest("Broker is null.");
            }

            Broker brokerToUpdate = _dataRepository.Get(id);
            if (brokerToUpdate == null)
            {
                return NotFound("The Broker record couldn't be found.");
            }

            _dataRepository.Update(id,broker);
            return NoContent();
        }

        // DELETE: api/Broker/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            _dataRepository.Delete(id); ;
            return NoContent();
        }
    }
}
