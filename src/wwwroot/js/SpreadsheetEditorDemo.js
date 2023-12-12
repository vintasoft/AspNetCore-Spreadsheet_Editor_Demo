var _spreadsheetDocumentEditorControl;

var _localizer;

var _blockUiDialog;



// === Spreadsheet document editor control events ===

function __spreadsheetDocumentEditorControl_warningOccured(event, eventArgs) {
    // show the error message
    __showErrorMessage(eventArgs.message);
}

function __spreadsheetDocumentEditorControl_formulaSyntaxError(event, eventArgs) {
    // show the error message (timeout is used because error may occur in handler of "keydown" event)
    setTimeout(function () { __showErrorMessage(eventArgs.message) }, 5);
}

function __spreadsheetDocumentEditorControl_synchronizationException(event, eventArgs) {
    // show the error message
    __showErrorMessage(eventArgs.message);
}

function __spreadsheetDocumentEditorControl_asyncOperationStarted(event, eventArgs) {
    // block UI
    __blockUI(eventArgs.description);
}

function __spreadsheetDocumentEditorControl_asyncOperationFinished(event, eventArgs) {
    // unblock UI
    __unblockUI();
}

function __spreadsheetDocumentEditorControl_asyncOperationFailed(event, eventArgs) {
    // get description of asynchronous operation
    var description = eventArgs.description;
    // get additional information about asynchronous operation
    var additionalInfo = eventArgs.data;
    // if additional information exists
    if (additionalInfo != null)
        // show error message
        __showErrorMessage(additionalInfo);
    // if additional information does NOT exist
    else
        // show error message
        __showErrorMessage(description + ": unknown error.");
}

function __spreadsheetDocumentEditorControl_textSearchFinished(event, eventArgs) {
    alert(eventArgs.message);
}

function __spreadsheetDocumentEditorControl_newWorkbookCreating(event, eventArgs) {
    eventArgs.createWorkbook = confirm(eventArgs.message);
}



// === Open default XLSX document ===

function __openDefaultSpreadsheetDocument() {
    var fileId = "SalesReport.xlsx";
    // copy the file from global folder to the session folder
    Vintasoft.Imaging.VintasoftFileAPI.copyFile("UploadedImageFiles/" + fileId, __onCopyFile_success, __onCopyFile_error);
}

/**
 Request for copying of file is executed successfully.
 @param {object} data Information about copied file.
*/
function __onCopyFile_success(data) {
    // open XLSX document in the spreadsheet document editor
    _spreadsheetDocumentEditorControl.openDocument(data.fileId);
}

/**
 Request for copying of file is failed.
 @param {object} data Information about error.
*/
function __onCopyFile_error(data) {
    alert(data.errorMessage);
}



// === Utils ===

/**
 Blocks the UI. 
 @param {string} text Message that describes why UI is blocked.
*/
function __blockUI(text) {
    _blockUiDialog = new BlockUiDialogJS(text);
}

/**
 Unblocks the UI.
*/
function __unblockUI() {
    if (_blockUiDialog != null) {
        _blockUiDialog.close();
        _blockUiDialog = null;
    }
}

/**
 Shows an error message.
 @param {object} data Information about error.
*/
function __showErrorMessage(data) {
    __unblockUI();
    new ErrorMessageDialogJS(data);
}

/**
 Returns application URL.
*/
function __getApplicationUrl() {
    var applicationUrl = window.location.toString();
    if (applicationUrl[applicationUrl.length - 1] != '/')
        applicationUrl = applicationUrl + '/';
    return applicationUrl;
}

/**
 Returns a value indicating whether application is executing on mobile device.
*/
function __isMobileDevice() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

/**
 Window is resized.
*/
function __window_resize() {
    __changeDemoHeaderVisibility(window.innerHeight < 500)
}

/**
 Changes the visibility of demo header.
*/
function __changeDemoHeaderVisibility(hide) {
    var displayStyle = "block";
    var heightStyle = "calc(100% - 60px)";
    if (hide) {
        displayStyle = "none";
        heightStyle = "100%"
    }

    var demoHeader = document.getElementById("demoHeader");
    demoHeader.style.display = displayStyle;

    var spreadsheetDocumentEditorControlContainer = document.getElementById("spreadsheetDocumentEditorControlContainer");
    spreadsheetDocumentEditorControlContainer.style.height = heightStyle;
}



// === Localization ===

/**
 Creates the dictionary for localization of application UI.
*/
function __createUiLocalizationDictionary() {
    var tempDialogs = [];
    __createDocumentViewerDialogsForLocalization(tempDialogs);

    if (_localizer == null)
        // create UI localizer
        _localizer = new Vintasoft.Shared.VintasoftLocalizationJS();

    var localizationDict = _localizer.getDocumentLocalizationDictionary();
    var localizationDictString = JSON.stringify(localizationDict, null, '\t');
    console.log(localizationDictString);

    var floatingContainer = document.getElementById("spreadsheetDocumentEditorControlContainer");
    for (var i = 0; i < tempDialogs.length; i++) {
        floatingContainer.removeChild(tempDialogs[i].get_DomElement());
        delete tempDialogs[i];
    }
}

/**
 Creates the dialogs, which are used in Web Document Viewer, for localization.
*/
function __createDocumentViewerDialogsForLocalization(tempDialogs) {
    var floatingContainer = document.getElementById("spreadsheetDocumentEditorControlContainer");

    var spreadsheetEditorControl = _spreadsheetDocumentEditorControl.get_SpreadsheetEditorControl();

    var renameWorksheetDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiRenameWorksheetDialogJS(spreadsheetEditorControl);
    renameWorksheetDialog.render(floatingContainer);
    tempDialogs.push(renameWorksheetDialog);

    var moveWorksheetDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiMoveWorksheetDialogJS(spreadsheetEditorControl);
    moveWorksheetDialog.render(floatingContainer);
    tempDialogs.push(moveWorksheetDialog);

    var findTextDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiFindTextDialogJS(spreadsheetEditorControl);
    findTextDialog.render(floatingContainer);
    tempDialogs.push(findTextDialog);

    var selectFunctionDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiSelectFunctionDialogJS(spreadsheetEditorControl);
    selectFunctionDialog.render(floatingContainer);
    tempDialogs.push(selectFunctionDialog);

    var insertCommentDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiInsertCommentDialogJS(spreadsheetEditorControl);
    insertCommentDialog.render(floatingContainer);
    tempDialogs.push(insertCommentDialog);

    var editCommentDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiEditCommentDialogJS(spreadsheetEditorControl);
    editCommentDialog.render(floatingContainer);
    tempDialogs.push(editCommentDialog);

    var cellNumberFormatDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiCellNumberFormatDialogJS(spreadsheetEditorControl);
    cellNumberFormatDialog.render(floatingContainer);
    tempDialogs.push(cellNumberFormatDialog);

    var insertChartDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiInsertChartDialogJS(spreadsheetEditorControl, "ChartSource.xlsx");
    insertChartDialog.render(floatingContainer);
    tempDialogs.push(insertChartDialog);

    var editChartPropertiesDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiEditChartPropertiesDialogJS(spreadsheetEditorControl);
    editChartPropertiesDialog.render(floatingContainer);
    tempDialogs.push(editChartPropertiesDialog);

    var editHyperlinkDialog = new Vintasoft.Imaging.Office.UI.Dialogs.WebUiEditHyperlinkDialogJS(spreadsheetEditorControl);
    editHyperlinkDialog.render(floatingContainer);
    tempDialogs.push(editHyperlinkDialog);
}

/**
 Enables the localization of application UI.
*/
function __enableUiLocalization() {
    if (_localizer == null)
        // create UI localizer
        _localizer = new Vintasoft.Shared.VintasoftLocalizationJS();

    // if localizer is ready (localizer loaded localization dictionary)
    if (_localizer.get_IsReady()) {
        // localize DOM-elements of web page
        _localizer.localizeDocument();
    }
    // if localizer is NOT ready
    else
        // wait when localizer will be ready
        Vintasoft.Shared.subscribeToEvent(_localizer, "ready", function () {
            // localize DOM-elements of web page
            _localizer.localizeDocument();
        });

    // subscribe to the "dialogShown" event of web spreadsheet document editor
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "dialogShown", function (event, data) {
        _localizer.localizeDocument();
    });
}



// === Main ===

/**
 Main function.
*/
function __main() {
    // set the session identifier
    var hiddenSessionFieldElement = document.getElementById('hiddenSessionField');
    Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(hiddenSessionFieldElement.value);

    // specify web services, which should be used in this demo

    Vintasoft.Shared.WebServiceJS.defaultFileService = new Vintasoft.Shared.WebServiceControllerJS(__getApplicationUrl() + "vintasoft/api/MyVintasoftFileApi");
    Vintasoft.Shared.WebServiceJS.defaultOfficeService = new Vintasoft.Shared.WebServiceControllerJS(__getApplicationUrl() + "vintasoft/api/MyVintasoftOfficeApi");

    // create settings for spreadsheet document editor control
    var spreadsheetDocumentEditorControlSettings = new Vintasoft.Imaging.Office.UI.WebSpreadsheetDocumentEditorControlSettingsJS("spreadsheetDocumentEditorControlContainer", "spreadsheetDocumentEditorControl");

    // create the spreadsheet document editor control
    _spreadsheetDocumentEditorControl = new Vintasoft.Imaging.Office.UI.WebSpreadsheetDocumentEditorControlJS(spreadsheetDocumentEditorControlSettings);

    // if application is executing on mobile device
    if (__isMobileDevice()) {
        // enable "pan and selection" mode in spreadsheet document editor

        var interactionMode = new Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS("PanAndSelection");
        _spreadsheetDocumentEditorControl.set_InteractionMode(interactionMode);

        // increase radius of interaction points in spreadsheer editor
        var spreadsheetEditor = _spreadsheetDocumentEditorControl.get_SpreadsheetEditorControl();
        spreadsheetEditor.set_InteractionPointRadius(8);

        // hide main menu header in fullscreen mode
        _spreadsheetDocumentEditorControl.set_ShowMainMenuHeaderInFullscreenMode(false);
        // hide footer panel in fullscreen mode
        _spreadsheetDocumentEditorControl.set_ShowFooterPanelInFullscreenMode(false);
    }

    // subscribe to the "warningOccured" event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "warningOccured", __spreadsheetDocumentEditorControl_warningOccured);
    // subscribe to the "formulaSyntaxError" event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "formulaSyntaxError", __spreadsheetDocumentEditorControl_formulaSyntaxError);
    // subscribe to the "formulaSyntaxError" event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "synchronizationException", __spreadsheetDocumentEditorControl_synchronizationException);
    // subscribe to the asyncOperationStarted event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "asyncOperationStarted", __spreadsheetDocumentEditorControl_asyncOperationStarted);
    // subscribe to the asyncOperationFinished event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "asyncOperationFinished", __spreadsheetDocumentEditorControl_asyncOperationFinished);
    // subscribe to the asyncOperationFailed event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "asyncOperationFailed", __spreadsheetDocumentEditorControl_asyncOperationFailed);
    // subscribe to the textSearchFinished event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "textSearchFinished", __spreadsheetDocumentEditorControl_textSearchFinished);
    // subscribe to the newWorkbookCreating event of spreadsheet document editor control
    Vintasoft.Shared.subscribeToEvent(_spreadsheetDocumentEditorControl, "newWorkbookCreating", __spreadsheetDocumentEditorControl_newWorkbookCreating);

    // subscribe to the "resize" event of window
    window.onresize = __window_resize;
    // change the visibility of demo header
    __changeDemoHeaderVisibility(window.innerHeight < 500);

    // enable the localization of application UI
    __enableUiLocalization();

    // wait while web page will be loaded
    $(document).ready(function () {
        document.oncontextmenu = function () {
            // specify that context menu of web browser should not be shown
            return false;
        };

        // open the default XLSX document
        __openDefaultSpreadsheetDocument();

        // create the dictionary for localization of application UI
        //__createUiLocalizationDictionary();
    });
}



// run main function
__main();
