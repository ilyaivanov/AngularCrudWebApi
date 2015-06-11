using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading;
using System.Web.Http;
using CRUDSandbox.Models;

namespace CRUDSandbox.Controllers
{
    public class EntityCrudController<T> : ApiController where T : class
    {
        //R
        public virtual T[] Get()
        {
            var c = new DbContext();
            return c.Set<T>()
                    .ToArray();
        }
        //C
        public T Post(T item)
        {
            var context = new DbContext();

            item = context.Set<T>()
                          .Add(item);

            context.SaveChanges();
            context.Dispose();
            return item;
        }
        //U
        public virtual void Put(T item)
        {
            var context = new DbContext();

            context.Set<T>()
                   .Attach(item);
            var manager = ((IObjectContextAdapter) context).ObjectContext.ObjectStateManager;
            manager.ChangeObjectState(item, EntityState.Modified);


            context.SaveChanges();
            context.Dispose();
        }
        //D
        public void Delete(int id)
        {
            var context = new DbContext();
            context.SaveChanges();
        }
    }

    public class BooksController : EntityCrudController<Book>
    {

    }
    
    public class StudentsController : EntityCrudController<Student>
    {

    }

}