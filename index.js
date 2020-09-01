//hi
var fs = require("fs");

const prompt = require('prompt');
// const { write } = require('fs');

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
    // writeTitle(title);
    // writeDesc(description);
    // writeInstall(installation);
    // writeUsage(usage);
    // writeLicense(license)
    // writeContrib(contributing)
    // writeTests(tests)
    // writeQuestions(questions)
});

function onErr(err) {
    console.log(err);
    return 1;
}

function writeFile(title,description,installation,usage,license,contributing,tests,username,email) {
    fs.appendFile("README.md", "# " + title + '\n\n', function(err) {
      if (err) {
        console.log(err);
      }
      fs.appendFile("README.md", "![license](https://img.shields.io/static/v1?label=license&message=" + license + "&color=blue)" + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
        fs.appendFile("README.md", "## Description" + '\n' + description + '\n\n', function(err) {
          if (err) {
            console.log(err);
          }
          fs.appendFile("README.md", "## Table of Contents" + '\n' + "* [Installation](#installation)" + '\n' + "* [Usage](#usage)" + '\n' + "* [License](#license)" + '\n' + "* [Contributing](#contributing)" +'\n\n', function(err) {
            if (err) {
              console.log(err);
            }
            fs.appendFile("README.md", "## Installation" + '\n' + installation + '\n\n', function(err) {
              if (err) {
                console.log(err);
              }
              fs.appendFile("README.md", "## Usage" + '\n' + usage + '\n\n', function(err) {
                if (err) {
                  console.log(err);
                }
                fs.appendFile("README.md", "## License" + '\n' + license + '\n\n', function(err) {
                  if (err) {
                    console.log(err);
                  }
                  fs.appendFile("README.md", "## Contributing" + '\n' + contributing + '\n\n', function(err) {
                    if (err) {
                      console.log(err);
                    }
                    fs.appendFile("README.md", "## Tests" + '\n' + tests + '\n\n', function(err) {
                      if (err) {
                        console.log(err);
                      }
                      fs.appendFile("README.md", "## Questions" + '\n' + "GitHub username: " + username + '\n' + "[Visit profile](https://github.com/" + username + ")" + '\n\n' + "Email: " + email + '\n', function(err) {
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
}





function writeLicense() {
  fs.appendFile("README.md", "## License" + '\n' + license + '\n\n', function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function writeTOC() {
  fs.appendFile("README.md", "## Table of Contents" + '\n' + "- [Installation](#Installation)" + '\n\n', function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function writeTitle(title) {
    // console.log(title);
    fs.appendFile("README.md", "# " + title + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}

function writeDesc(description) {
    // console.log(description);
    fs.appendFile("README.md", "## Description" + '\n' + description + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}

function writeInstall(installation) {
    // console.log(installation);
    fs.appendFile("README.md", "## Installation" + '\n' + installation + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}

function writeUsage(usage) {
    // console.log(usage);
    fs.appendFile("README.md", "## Usage" + '\n' + usage + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}

function writeLicense(license) {
    console.log(license);
}

function writeContrib(contributing) {
    // console.log(contributing);
    fs.appendFile("README.md", "## Contributing" + '\n' + contributing + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}

function writeTests(tests) {
    // console.log(tests);
    fs.appendFile("README.md", "## Tests" + '\n' + tests + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}

function writeQuestions(questions) {
    console.log(questions);
}