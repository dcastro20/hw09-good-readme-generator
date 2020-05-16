function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== " ") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return " "
}

function generateMarkdown(data) {
 var badge = renderLicenseBadge(data.license, data.github, data.title);

  return `# Title

 ${data.title}

## Description

 ${data.description}

## Table of Contents

 ${data.toc}

## Installation

 ${data.install}

## Usage

 ${data.usage}

## License

 ${data.license}

## Contributing

 ${data.contribute}

## Tests

 ${data.test}

## Questions (Github)

${data.github}

## Badge

${badge} 
`;
}

module.exports = generateMarkdown;

//can be format like HTML google github markdown cheat sheet