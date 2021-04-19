using PeakInvest.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace PeakInvest.Infrastructure.Repository
{
    public class FinancialRepository
    {
        public KeyValuePair<int, string> GetCustomerById(int id)
        {
            var list = new List<KeyValuePair<int, string>>
            {
                new KeyValuePair<int, string>(1, "João"),
                new KeyValuePair<int, string>(2, "Maria"),
                new KeyValuePair<int, string>(3, "Ana")
            };

            return list.FirstOrDefault(x => x.Key == id);
        }
    }
}
