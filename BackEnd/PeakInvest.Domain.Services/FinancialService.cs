using PeakInvest.Domain.Models;
using PeakInvest.Infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeakInvest.Domain.Services
{
    public class FinancialService
    {
        private readonly FinancialRepository repository;
        public FinancialService()
        {
            repository = new();
        }

        public decimal Calculate(Financial obj, decimal percent = 5)
        {
            var fator = (percent / 100m) + 1;
            var total = obj.Valor * obj.Parcela;
            var result = total * fator;
            return result;
        }

        public KeyValuePair<int, string> GetCustomerById(int id)
        {
            return repository.GetCustomerById(id);
        }
    }
}
