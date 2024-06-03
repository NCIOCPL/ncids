## Pull Request Details

_Add description_

Closes #<TICKET-NUMBER>

## Author PR Checklist
Items that the author of the PR is responsible for checking before submitted the PR.

### General:
- [ ] I have reviewed the acceptance criteria defined in the ticket and ensured the work has been completed.
- [ ] The commit message passes [all quality commit message standards](https://github.com/NCIOCPL/ncids/wiki/Creating-Quality-Commit-Messages).
- [ ] Unit tests have been updated or created to reflect any javascript changes.
- [ ] Storybook scenarios have been updated or created to reflect any html/css/js changes.

### Accessibility:
- [ ] WCAG 2.1 Level AA requirements have been met.

### Development:
- [ ] Any new or updated javascript code has 100% unit test coverage.
- [ ] New or updated breakpoints have regression images.
- [ ] Breaking changes have been thoroughly documented in the PR.

## Product Reviewer PR Checklist
Items the product team is responsible for reviewing.

### General:
- [ ] There are no unexpected or unapproved regression image changes. 
- [ ] Functionality of interactive elements meet the acceptance criteria.
- [ ] The product is visually and functionally the same across the different browsers.

### Accessibility:
- [ ] AxeDev Tools: there are no new or outstanding accessibility issues introduced in this PR.
- [ ] Lighthouse: scores have not noticeably decreased during this PR.
- [ ] Wave: there are no new errors or contrast errors introduced in this PR.

## Design Reviewer PR Checklist
Items the design team is responsible for reviewing.  

### General:
- [ ] New or updated features introduced in this PR are developed mobile-first.
- [ ] Breakpoint changes and regression images match those breakpoints.
- [ ] This PR has been tested in all supported browsers at all breakpoints.

## Developer Reviewer PR Checklist
Items the development team is responsible for reviewing.

### General:
- [ ] New code passes code quality standards set by industry standards.
- [ ] The expected Storybook stories have been added or updated for the new or updated feature.
- [ ] The expected unit tests have been added or updated for the new or updated feature.

### Accessibility:
- [ ] VoiceOver: Described content matches with what was expected.
- [ ] Keyboard navigation: new or updated features and content are navigable via the keyboard.
