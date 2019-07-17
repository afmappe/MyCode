using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MyCode.Exceptions
{
    /// <summary>
    /// Generic exception handler
    /// </summary>
    public static class ExceptionHandler
    {
        /// <summary>
        ///  Exception handler that convert and propagate exception
        /// </summary>
        /// <param name="context">HTTP Context</param>
        /// <returns> Task</returns>
        public static async Task Handler(HttpContext context)
        {
            context.Response.ContentType = "application/json";

            IExceptionHandlerFeature contextFeature = context.Features.Get<IExceptionHandlerFeature>();

            if (contextFeature != null)
            {
                var statusCode = HttpStatusCode.InternalServerError;

                if (contextFeature.Error is NotImplementedException)
                {
                    statusCode = HttpStatusCode.NotImplemented;
                }
                else if (contextFeature.Error is ArgumentException)
                {
                    statusCode = HttpStatusCode.BadRequest;
                }
                //else if (contextFeature.Error is AuthenticationException)
                //{
                //    statusCode = HttpStatusCode.Unauthorized;
                //}

                context.Response.StatusCode = (int)statusCode;

                string message = FlattenErrorMessages(contextFeature.Error);

                await context.Response.WriteAsync(JsonConvert.SerializeObject(new
                {
                    StatusCode = statusCode,
                    Message = message,
                    StackTrace = contextFeature.Error.StackTrace
                }));
            }
        }

        /// <summary>
        /// Colapse inner exceptions
        /// </summary>
        /// <param name="exception">Exception</param>
        /// <returns></returns>
        private static string FlattenErrorMessages(Exception exception)
        {
            StringBuilder msg = new StringBuilder();

            msg.Append(exception.Message);
            Exception innerException = exception.InnerException;

            while (innerException != null && !string.IsNullOrEmpty(innerException.Message))
            {
                msg.Append(" | ");
                msg.Append(innerException.Message);
                innerException = innerException.InnerException;
            }

            return msg.ToString();
        }
    }
}