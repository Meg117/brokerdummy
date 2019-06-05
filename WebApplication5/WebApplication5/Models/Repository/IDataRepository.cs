using System.Collections.Generic;
namespace WebApplication5.Models.Repository
{
   public  interface IDataRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(long id);
        void Add(TEntity entity);
        void Update(int id, TEntity entity);
        void Delete(int id);
    }
}
