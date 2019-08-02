namespace MyCode.Entities
{
    /// <summary>
    /// Application configuration object, which map appSettings section in appsettings.json file
    /// </summary>
    public class AppSettings
    {
        /// <summary>
        /// JWT Audience
        /// </summary>
        public string Audience { get; set; }

        /// <summary>
        /// JWT key
        /// </summary>
        public string Key { get; set; }
    }
}