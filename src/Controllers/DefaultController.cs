using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSpreadsheetEditorDemo.Controllers
{
    public class DefaultController : Controller
    {

        public DefaultController()
        {
        }



        public IActionResult Index()
        {
            return View();
        }

    }
}
