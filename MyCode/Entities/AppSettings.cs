namespace MyCode.Entities
{
    /// <summary>
    /// Application configuration object, which map appSettings section in appsettings.json file
    /// </summary>
    public class AppSettings
    {
        /// <summary>
        /// Database connection string
        /// </summary>
        public string DefaultConnection { get; set; }

        /// <summary>
        /// JWT key
        /// </summary>
        public string Secret { get; set; }
    }
}