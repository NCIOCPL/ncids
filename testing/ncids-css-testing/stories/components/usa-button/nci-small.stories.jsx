import React from "react";
import { TestCase } from "../../../components/test-case";
import css from "!!raw-loader!sass-loader!./usa-button.scss";

const html = `
<button class="usa-button usa-button--nci-small">Button</button>
<button class="usa-button usa-button--nci-small usa-button--hover">Hover</button>
<button class="usa-button usa-button--nci-small usa-button--active">Active</button>
<button class="usa-button usa-button--nci-small usa-focus">Focus</button>
<button class="usa-button usa-button--nci-small" disabled>Disabled</button>
`;

export const NCISmall = () => <TestCase css={css} html={html} />;
