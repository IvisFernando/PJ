using Microsoft.AspNetCore.Mvc;
using PeakInvest.Domain.Models;
using PeakInvest.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeakInvest.Presentation.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FinancialController : ControllerBase
    {
        /*
            - Não efetuei a autenticação na API nesse teste, mas geralmente eu utilizo JWT

            - O backend está com forte acoplamento neste teste, mas geralmente eu efetuo o desacoplamento utilizando Injeção de Dependência
         */

        private readonly FinancialService service;
        public FinancialController()
        {
            service = new();
        }

        [HttpGet]
        [Route("GetCustomer/{id:int}")]
        public IActionResult Get(int id)
        {
            return Ok(service.GetCustomerById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Financial obj)
        {
            return Ok(service.Calculate(obj));
        }
    }
}
