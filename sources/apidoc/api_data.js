define({ "api": [
  {
    "type": "post",
    "url": "/clients/import-csv",
    "title": "Import csv file",
    "name": "Import_csv",
    "group": "ClientImport",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token in format <code>Bearer your_auth_token</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "agent_id",
            "description": "<p>Id of integration for contacts</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "variables",
            "description": "<p>Array <code>[{&quot;name&quot;: &quot;phone&quot;, &quot;position&quot;: 0}, {&quot;name&quot;: &quot;first_name&quot;, &quot;position&quot;: 2}]</code> with CSV's map</p> <ul> <li>phone variable is required</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>CSV file with list of contacts, delimiter &quot;,&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Unprocessable Entity</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ClientsController.php",
    "groupTitle": "ClientImport"
  },
  {
    "type": "post",
    "url": "/clients/import",
    "title": "Import list",
    "name": "Import_list",
    "group": "ClientImport",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token in format <code>Bearer your_auth_token</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "agent_id",
            "description": "<p>Id of integration for contacts</p>"
          },
          {
            "group": "Parameter",
            "type": "users",
            "optional": false,
            "field": "variables",
            "description": "<p>Array of client <code>[{&quot;phone&quot;: &quot;+1234567890&quot;, &quot;name&quot;: &quot;John&quot;}, {&quot;phone&quot;: &quot;+1234567891&quot;, &quot;name&quot;: &quot;Dan&quot;}]</code></p> <ul> <li>phone is required</li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Unprocessable Entity</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ClientsController.php",
    "groupTitle": "ClientImport"
  },
  {
    "type": "post",
    "url": "/mailing",
    "title": "Create mailing",
    "name": "Create_mailing",
    "group": "Mailing",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token in format <code>Bearer your_auth_token</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mailing name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "massage",
            "description": "<p>Mailing message</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date when the mailing will start being sent.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "agents",
            "description": "<p>List of integration ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>List of tags</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Unprocessable Entity</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/MailingController.php",
    "groupTitle": "Mailing"
  }
] });