function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents


## Description
${data.description}


## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses${data.license})

`;
}

module.exports = generateMarkdown;
