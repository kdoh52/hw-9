var fs = require("fs");

// flatiron / prompt
const prompt = require('prompt');
prompt.start();

prompt.get(['title', 'description', 'installation', 'usage', 'license_MIT_Apache_GPL', 'contributing', 'tests', 'github_username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    let title = result.title;
    let description = result.description;
    let installation = result.installation;
    let usage = result.usage;
    let license = (result.license_MIT_Apache_GPL).trim().toUpperCase();
    let contributing = result.contributing;
    let tests = result.tests;
    let username = result.github_username.trim();
    let email = result.email.trim();

    writeFile(title,description,installation,usage,license,contributing,tests,username,email);
});

function onErr(err) {
    console.log(err);
    return 1;
}

// writing README file
function writeFile(title,description,installation,usage,license,contributing,tests,username,email) {
    fs.appendFile("newREADME.md", "# " + title + '\n\n', function(err) {
      if (err) {
        console.log(err);
      }
      fs.appendFile("newREADME.md", "![license](https://img.shields.io/static/v1?label=license&message=" + license + "&color=blue)" + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
        fs.appendFile("newREADME.md", "## Description" + '\n' + description + '\n\n', function(err) {
          if (err) {
            console.log(err);
          }
          fs.appendFile("newREADME.md", "## Table of Contents" + '\n' + "* [Installation](#installation)" + '\n' + "* [Usage](#usage)" + '\n' + "* [License](#license)" + '\n' + "* [Contributing](#contributing)" +'\n\n', function(err) {
            if (err) {
              console.log(err);
            }
            fs.appendFile("newREADME.md", "## Installation" + '\n' + installation + '\n\n', function(err) {
              if (err) {
                console.log(err);
              }
              fs.appendFile("newREADME.md", "## Usage" + '\n' + usage + '\n\n', function(err) {
                if (err) {
                  console.log(err);
                }
                fs.appendFile("newREADME.md", "## License" + '\n' + license + '\n\n', function(err) {
                  if (err) {
                    console.log(err);
                  }
                  fs.appendFile("newREADME.md", "## Contributing" + '\n' + contributing + '\n\n', function(err) {
                    if (err) {
                      console.log(err);
                    }
                    fs.appendFile("newREADME.md", "## Tests" + '\n' + tests + '\n\n', function(err) {
                      if (err) {
                        console.log(err);
                      }
                      fs.appendFile("newREADME.md", "## Questions" + '\n' + "GitHub: " + username + '\n' + "[(Visit profile)](https://github.com/" + username + ")" + '\n\n' + "Email: " + email + '\n', function(err) {
                        if (err) {
                          console.log(err);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
};