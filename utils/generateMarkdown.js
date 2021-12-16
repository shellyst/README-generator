function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses${data.license})

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions

View my previous work on Github: [${data.username}](https://github.com/${data.username})
</br>
📧Shoot me an email to ask any questions, or inquire about collaboration: ${data.email}

`;
}

module.exports = generateMarkdown;
