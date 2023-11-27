import React from "react";
import { TestCase } from "../../../components/test-case";
import css from './usa-button.scss';

const html = `
<button class="usa-button usa-button--nci-full-width">Button</button>
<button class="usa-button usa-button--nci-full-width usa-button--hover">Hover</button>
<button class="usa-button usa-button--nci-full-width usa-button--active">Active</button>
<button class="usa-button usa-button--nci-full-width usa-focus">Focus</button>
<button class="usa-button usa-button--nci-full-width" disabled>Disabled</button>
`;

export const NCIFullWidth = () => <TestCase css={css} html={html} />;
