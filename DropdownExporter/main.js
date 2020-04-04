define([
    'base/js/namespace',
    'jquery',
    'require',
    'base/js/events',
    'base/js/utils',
], function(Jupyter, $, requirejs, events, configmod, utils) {
    "use strict";

    var load_extension = function() {
             Jupyter.toolbar.add_buttons_group([
                 Jupyter.keyboard_manager.actions.register ({
                      'help'   : 'Export as PDF',
                      'icon'   : 'fa-file-pdf-o',
                      'handler': function () {
                                                    Jupyter.menubar._nbconvert("pdf", true);
                      }
                 }, 'download_pdf', 'DropdownExporter'),
                 Jupyter.keyboard_manager.actions.register ({
                      'help'   : 'Export as HTML',
                      'icon'   : 'fa-html5',
                      'handler': function () {
                                                    Jupyter.menubar._nbconvert("html", true);
                      }
                 }, 'download_HTML', 'DropdownExporter'),
                 Jupyter.keyboard_manager.actions.register ({
                      'help'   : 'Export as Python Script',
                      'icon'   : 'fa-file-code-o',
                      'handler': function () {
                                                    Jupyter.menubar._nbconvert("script", true);
                      }
                 }, 'download_py', 'DropdownExporter'),
                 Jupyter.keyboard_manager.actions.register ({
                      'help'   : 'Export as Markdown',
                      'icon'   : 'fa-cloud-download',
                      'handler': function () {
                                                    Jupyter.menubar._nbconvert("markdown", true);
                      }
                 }, 'download_markdown', 'DropdownExporter'),
                 Jupyter.keyboard_manager.actions.register ({
                      'help'   : 'Export as LaTeX',
                      'icon'   : 'fa-text-width',
                      'handler': function () {
                                                    Jupyter.menubar._nbconvert("latex", true);
                      }
                 }, 'download_TeX', 'DropdownExporter'),
                 ]);
    };



    var extension = {
        load_jupyter_extension : load_extension,
        load_ipython_extension : load_extension
    };
    return extension;
});
