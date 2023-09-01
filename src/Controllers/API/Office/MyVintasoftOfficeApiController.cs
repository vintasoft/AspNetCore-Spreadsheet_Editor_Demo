using Microsoft.AspNetCore.Hosting;
using Vintasoft.Imaging.Office.AspNetCore.ApiControllers;

namespace AspNetCoreSpreadsheetEditorDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to work with Office documents.
    /// </summary>
    public class MyVintasoftOfficeApiController : VintasoftOfficeApiController
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftOfficeApiController"/> class.
        /// </summary>
        public MyVintasoftOfficeApiController(IWebHostEnvironment hostingEnvironment)
            : base(hostingEnvironment)
        {
        }

    }
}