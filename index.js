var fs = require("fs");

const prompt = require('prompt');
// const { write } = require('fs');

prompt.start();

prompt.get(['title', 'description', 'installation', 'usage', 'license', 'contributing', 'tests', 'questions'], function (err, result) {
    if (err) { return onErr(err); }
    let title = result.title;
    let description = result.description;
    let installation = result.installation;
    let usage = result.usage;
    let license = result.license;
    let contributing = result.contributing;
    let tests = result.tests;
    let questions = result.questions;

    writeFile(title,description,installation,usage,license,contributing,tests,questions);
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

function writeFile(title,description,installation,usage,license,contributing,tests,questions) {
    fs.appendFile("README.md", "# " + title + '\n\n', function(err) {
        if (err) {
          console.log(err);
        }
        fs.appendFile("README.md", "## Description" + '\n' + description + '\n\n', function(err) {
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
                    fs.appendFile("README.md", "## Contributing" + '\n' + contributing + '\n\n', function(err) {
                        if (err) {
                          console.log(err);
                        }
                        fs.appendFile("README.md", "## Tests" + '\n' + tests + '\n\n', function(err) {
                            if (err) {
                              console.log(err);
                            }
                        });
                    });
                });
            });
        });
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