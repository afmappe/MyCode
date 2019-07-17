using Newtonsoft.Json;
using System;
using System.Runtime.ExceptionServices;

namespace MyCode.Exceptions
{
    /// <summary>
    /// Generic exception handler for commands
    /// </summary>
    public static class CommandExceptionHandler
    {
        /// <summary>
        /// Exception handler that convert command request into a json object
        /// </summary>
        /// <typeparam name="TRequest">Entity that represent a command request</typeparam>
        /// <param name="request">Command request</param>
        /// <param name="ex">Exception</param>
        public static void Handler<TRequest>(TRequest request, Exception ex)
        {
            if (request != null && !ex.Data.Contains("Request"))
            {
                ex.Data.Add("Request", JsonConvert.SerializeObject(request));
            }
            ExceptionDispatchInfo.Capture(ex).Throw();
        }
    }
}