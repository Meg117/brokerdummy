using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace WebApplication5.Models.Repository.DataManager
{
    public class brokerManager: IDataRepository<Broker>
    {
        readonly BrokerContext _brokerContext;

        public brokerManager(BrokerContext context)
        {
            _brokerContext = context;
        }

        public IEnumerable<Broker> GetAll()
        {
            return _brokerContext.Broker.ToList();
        }

        public Broker Get(long id)
        {
            return _brokerContext.Broker
                  .FirstOrDefault(e => e.brokersId == id);
        }

        public void Add( Broker entity)
        {
            _brokerContext.Broker.Add(entity);
            _brokerContext.SaveChanges();
        }

        public void Update(int id, Broker entity)
        {
            var broker = _brokerContext.Broker.FirstOrDefault(m => m.brokersId == id);
            broker.brokerName = entity.brokerName;
            broker.email = entity.email;
            broker.city = entity.city;
            broker.state = entity.state;
            broker.add1 = entity.add1;
            broker.add2 = entity.add2;
            broker.commission = entity.commission;
            broker.isActive = entity.isActive;
            _brokerContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var broker = _brokerContext.Broker.FirstOrDefault(m => m.brokersId == id);
            _brokerContext.Broker.Remove(broker);
            _brokerContext.SaveChanges();
        }
    }
}
