using System;
using System.Runtime.Serialization;

namespace MyCode.Exceptions
{
    /// <summary>
    /// Base exception pattern
    /// </summary>
    [Serializable]
    public class BaseException : Exception
    {
        /// <summary>
        /// Default constructor
        /// </summary>
        public BaseException()
        { }

        /// <summary>
        /// Default constructor
        /// </summary>
        /// <param name="code">Error code</param>
        public BaseException(string code)
            : base(code)
        {
            CodeText = code;
        }

        /// <summary>
        /// Default constructor
        /// </summary>
        /// <param name="code">Error code</param>
        /// <param name="innerException">Inner exception</param>
        public BaseException(string code, Exception innerException)
           : base(code, innerException)
        {
            CodeText = code;
        }

        /// <summary>
        /// Serialization context
        /// </summary>
        /// <param name="info">Serialization info</param>
        /// <param name="context">Context</param>
        protected BaseException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        { }

        /// <summary>
        /// Error code as text
        /// </summary>
        public string CodeText { get; set; }
    }
}