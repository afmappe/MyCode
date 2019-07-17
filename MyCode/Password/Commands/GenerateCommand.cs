using MediatR;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MyCode.Password.Commands
{
    /// <summary>
    ///
    /// </summary>
    public static class GenerateCommand
    {
        /// <summary>
        /// Implementation of <see cref="IRequestHandler{TRequest, TResponse}"/>/>
        /// </summary>
        public class Handler : IRequestHandler<Request, Response>
        {
            /// <summary>
            /// Implementation of <see cref="IRequestHandler{TRequest, TResponse}.Handle(TRequest, CancellationToken)"/>/>
            /// </summary>
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                Response response = null;

                if (request.Words != null && request.Words.Any())
                {
                    StringBuilder builder = new StringBuilder();

                    int size = request.Words.Max(x => x.Length);

                    await Task.Run(() =>
                    {
                        for (int i = 0; i < size && !cancellationToken.IsCancellationRequested; i++)
                        {
                            Combine(builder, request.Words, i);
                        }
                    });

                    if (!cancellationToken.IsCancellationRequested)
                    {
                        response = new Response
                        {
                            Text = builder.ToString()
                        };
                    }
                }

                return response;
            }

            /// <summary>
            ///
            /// </summary>
            /// <param name="builder"></param>
            /// <param name="words"></param>
            /// <param name="position"></param>
            private void Combine(StringBuilder builder, string[] words, int position)
            {
                char[] array = words.Where(x => x.Length > position)
                    .Select(x => x[position])
                    .Distinct()
                    .ToArray();

                if (array.Any())
                {
                    builder.Append(array);
                }
            }
        }

        /// <summary>
        ///
        /// </summary>
        [JsonObject]
        public class Request : IRequest<Response>
        {
            /// <summary>
            ///
            /// </summary>
            [Required]
            [JsonProperty("words")]
            public string[] Words { get; set; }
        }

        /// <summary>
        ///
        /// </summary>
        [JsonObject]
        public class Response
        {
            /// <summary>
            ///
            /// </summary>
            [JsonProperty("text")]
            public string Text { get; set; }
        }
    }
}