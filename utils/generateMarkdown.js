// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.Title}
by ${data.Username}
## Table of contents
- [Description](#description)
- [License](#License)
- [Install](#install)
- [Testing](#testing)
- [Contributors](#contributors)
- [Contact](#contact)
## Description
${data.Description}
## License
${data.License}
## Install
${data.Install}
## Testing
${data.Tests}
## Contributors
${data.Credits}
## Contact
- Name - ${data.Name}
- Email - ${data.Email}
- Github - [${data.Username}](https://github.com/${data.Username})
`;
}

module.exports = generateMarkdown;
