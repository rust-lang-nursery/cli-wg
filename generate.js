#! /usr/bin/env node

const { promisify } = require('util');
const writeFile = promisify(require('fs').writeFile);

const files = [
  { path: "index.html", title: "Getting started" },
  { path: "print.html", title: null },
  { path: "in-depth/config-files.html", title: "Using config files" },
  { path: "in-depth/docs.html", title: "Rendering documentation for your CLI apps" },
  { path: "in-depth/exit-code.html", title: "Exit codes" },
  { path: "in-depth/human-communication.html", title: "Communicating with humans" },
  { path: "in-depth/index.html", title: "In-depth topics" },
  { path: "in-depth/machine-communication.html", title: "Communicating with machines" },
  { path: "in-depth/signals.html", title: "Signal handling" },
  { path: "tutorial/cli-args.html", title: "Parsing command line arguments" },
  { path: "tutorial/errors.html", title: "Nicer error reporting" },
  { path: "tutorial/impl-draft.html", title: "First implementation" },
  { path: "tutorial/index.html", title: "A command line app in 15 minutes" },
  { path: "tutorial/output.html", title: "Output for humans and machines" },
  { path: "tutorial/packaging.html", title: "Packaging and distributing a Rust tool" },
  { path: "tutorial/setup.html", title: "Project setup" },
  { path: "tutorial/testing.html", title: "Testing" },
];

const template = ({path, title}) => {
  const newUrl = `https://rust-cli.github.io/book/${path}`;
  return `<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title ? title + " - " : ""}Command Line Applications in Rust</title>
        
        <script type="text/javascript">
            window.location.href = "${newUrl}"
        </script>
        <meta http-equiv="refresh" content="0; url=${newUrl}" />
        <link rel="canonical" href="${newUrl}"/>
    </head>
    <body>
        <p>This page has been moved <a href="${newUrl}">here</a></p>
    </body>
</html>
`
}

async function main() {
  for (const file of files) {
    await writeFile(file.path, template(file))
  }
}

main().catch(console.error.bind(console))
