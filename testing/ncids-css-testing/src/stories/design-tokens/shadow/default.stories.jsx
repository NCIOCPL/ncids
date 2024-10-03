import css from './shadow.scss?inline';

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

const Component = () => <div dangerouslySetInnerHTML={{ __html: html }}></div>;

export default {
	title: 'design-tokens/shadow',
	component: Component,
	parameters: {css}
};

export const Default = {};
