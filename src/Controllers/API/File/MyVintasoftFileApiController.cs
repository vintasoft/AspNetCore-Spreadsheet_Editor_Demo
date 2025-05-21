using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.IO;

using Vintasoft.Data;
using Vintasoft.Imaging.AspNetCore.ApiControllers;
using Vintasoft.Imaging.Codecs.Decoders;
using Vintasoft.Imaging.Office.OpenXml;
using Vintasoft.Imaging.Web.Services;
using Vintasoft.Shared.Web;

namespace AspNetCoreSpreadsheetEditorDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to manipulate PDF documents on server.
    /// </summary>
    public class MyVintasoftFileApiController : VintasoftFileApiController
    {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftFileApiController"/> class.
        /// </summary>
        public MyVintasoftFileApiController(IWebHostEnvironment hostingEnvironment)
            : base(hostingEnvironment)
        {
        }

        #endregion



        #region Methods

        #region PUBLIC

        /// <summary>
        /// Uploads an image file to the server.
        /// </summary>
        /// <param name="sessionId">The session identifier.</param>
        /// <param name="file">A file sent with HTTP request.</param>
        /// <returns>Response from the server.</returns>
        /// <remarks>
        /// Uploaded image files will be stored in the data storage on server.
        /// </remarks>
        /// <seealso cref="CreateSessionDataStorage"/>
        [HttpPost]
        public override WebImageFileResponseParams UploadImageFile([FromForm] string sessionId, IFormFile file)
        {
            WebImageFileResponseParams result = new WebImageFileResponseParams();
            try
            {
                if (sessionId == null || sessionId == string.Empty)
                    throw new ArgumentException("Request does not contain session ID.");
                // if request does NOT have file
                if (file == null)
                    throw new ArgumentException("Request does not contain files.");

                VintasoftFileWebService service = CreateWebService(sessionId);
                using (Stream fs = file.OpenReadStream())
                {
                    // if file is XLS document
                    if (XlsxDecoder.IsXlsDocument(fs))
                    {
                        // create temporary stream
                        using (MemoryStream xlsDocumentStream = new MemoryStream())
                        {
                            // convert XLS document to XLSX document
                            OpenXmlDocumentConverter.ConvertXlsToXlsx(fs, xlsDocumentStream);

                            // get file name
                            string fileName = file.FileName;
                            // set XLSX file name
                            fileName = Path.GetFileNameWithoutExtension(fileName) + ".xlsx";

                            // save converted XLSX document in session
                            result = service.UploadImageFile(xlsDocumentStream, fileName);
                        }
                    }
                    // if file is ODS document
                    else if (XlsxDecoder.IsOdsDocument(fs))
                    {
                        // create temporary stream
                        using (MemoryStream odsDocumentStream = new MemoryStream())
                        {
                            // convert ODS document to XLSX document
                            OpenXmlDocumentConverter.ConvertOdsToXlsx(fs, odsDocumentStream);

                            // get file name
                            string fileName = file.FileName;
                            // set XLSX file name
                            fileName = Path.GetFileNameWithoutExtension(fileName) + ".xlsx";

                            // save converted XLSX document in session
                            result = service.UploadImageFile(odsDocumentStream, fileName);
                        }
                    }
                    // if file is XLSX document
                    else
                    {
                        result = service.UploadImageFile(fs, file.FileName);
                    }
                }
            }
            catch (Exception ex)
            {
                result.success = false;
                result.errorMessage = GetFullExceptionMessage(ex);
            }

            return result;
        }

        #endregion


        #region PROTECTED

        /// <summary>
        /// Creates the <see cref="MyVintasoftFileWebService"/>
        /// that handles HTTP requests from clients and allows to manipulate files on a server.
        /// </summary>
        /// <returns>The <see cref="MyVintasoftFileWebService"/>
        /// that handles HTTP requests from clients and allows to manipulate files on a server.</returns>
        protected override VintasoftFileWebService CreateWebService(string sessionId)
        {
            IDataStorage storage = CreateSessionDataStorage(sessionId);
            MyVintasoftFileWebService service = new MyVintasoftFileWebService(storage);
            return service;
        }

        #endregion


        #region PRIVATE

        /// <summary>
        /// Returns the full exception message recursively.
        /// </summary>
        private string GetFullExceptionMessage(Exception ex)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.AppendLine(ex.Message);
            Exception innerException = ex.InnerException;
            while (innerException != null)
            {
                sb.AppendLine(string.Format("Inner exception: {0}", innerException.Message));
                innerException = innerException.InnerException;
            }
            return sb.ToString();
        }

        #endregion

        #endregion

    }
}