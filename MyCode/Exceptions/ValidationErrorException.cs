using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace MyCode.Exceptions
{
    /// <summary>
    /// Exception codes for validation problems
    /// </summary>
    public enum ValidationErrorCode
    {
        /// <summary>
        /// Validation fail
        /// </summary>
        ValidationFail
    }

    /// <summary>
    ///
    /// </summary>
    public class ValidationError
    {
        /// <summary>
        ///
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        ///
        /// </summary>
        public string Name { get; set; }
    }

    /// <summary>
    /// Exception for validation problems
    /// </summary>
    [Serializable]
    public class ValidationErrorException : BaseException
    {
        /// <summary>
        /// Implementation of <see cref="BaseException(string)"/>
        /// </summary>
        public ValidationErrorException(List<ValidationError> errors)
             : this(errors, null)
        {
        }

        /// <summary>
        /// Implementation of <see cref="BaseException(string, Exception)"/>
        /// </summary>
        public ValidationErrorException(List<ValidationError> errors, Exception innerException)
            : base(ValidationErrorCode.ValidationFail.ToString(), innerException)
        {
            Code = ValidationErrorCode.ValidationFail;
            Errors = errors;
        }

        /// <summary>
        /// Implementation of <see cref="BaseException(SerializationInfo, StreamingContext)"/>
        /// </summary>
        protected ValidationErrorException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        { }

        /// <summary>
        /// Error code
        /// </summary>
        public ValidationErrorCode Code { get; set; }

        /// <summary>
        /// Error list
        /// </summary>
        public List<ValidationError> Errors { get; set; }
    }

    /// <summary>
    ///
    /// </summary>
    public class ValidationErrorResult : IActionResult
    {
        /// <summary>
        /// Implementation of <see cref="IActionResult.ExecuteResultAsync(ActionContext)"/>
        /// </summary>
        public Task ExecuteResultAsync(ActionContext context)
        {
            var modelStateEntries = context.ModelState.Where(e => e.Value.Errors.Count > 0).ToArray();
            List<ValidationError> errors = new List<ValidationError>();

            if (modelStateEntries.Any())
            {
                foreach (var modelStateEntry in modelStateEntries)
                {
                    foreach (var modelStateError in modelStateEntry.Value.Errors)
                    {
                        var error = new ValidationError
                        {
                            Name = modelStateEntry.Key,
                            Description = modelStateError.ErrorMessage
                        };

                        errors.Add(error);
                    }
                }

                throw new ValidationErrorException(errors);
            }
            return Task.CompletedTask;
        }
    }
}