import React from "react";
import { TestCase } from "../../../components/test-case";
import css from "./usa-button.scss";

const html = `
<button class="usa-button">Button</button>
<button class="usa-button usa-button--hover">Hover</button>
<button class="usa-button usa-button--active">Active</button>
<button class="usa-button usa-focus">Focus</button>
<button class="usa-button" disabled>Disabled</button>
`;

export const Button = () => <TestCase css={css} html={html} />;
