using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyCode.Password.Commands;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyCode.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PasswordController : ControllerBase
    {
        private readonly IMediator Mediator;

        public PasswordController(IMediator mediator)
        {
            Mediator = mediator;
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<GenerateCommand.Response> Generate(GenerateCommand.Request request)
        {
            return await Mediator.Send(request);
        }

        /// <summary>
        /// GET api/values
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
}