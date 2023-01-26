import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './shadow.scss';

const html = `
<div>
    <div class="shadow-none" style="width: fit-content; padding: 12px">
        <p>This is Box Shadow None</p>
    </div>
    <br style="margin: 16px"/>
    <div class="shadow-1" style="width: fit-content; padding: 12px">
        <p>This is Box Shadow 1</p>
    </div>
    <br style="margin: 16px"/>
    <div class="shadow-2" style="width: fit-content; padding: 12px">
        <p>This is Box Shadow 2</p>
    </div>
    <br style="margin: 16px"/>
    <div class="shadow-3" style="width: fit-content; padding: 12px">
        <p>This is Box Shadow 3</p>
    </div>
    <br style="margin: 16px"/>
    <div class="shadow-4" style="width: fit-content; padding: 12px">
        <p>This is Box Shadow 4</p>
    </div>
    <br style="margin: 16px"/>
    <div class="shadow-5" style="width: fit-content; padding: 12px">
        <p>This is Box Shadow 5</p>
    </div>
</div>
`;

export const Default = () => <TestCase css={css} html={html} />;
