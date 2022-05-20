import React from 'react';

import Form from '.';

export default {
    title: 'Example/Form',
    component: Form,
};

const Template = (args) => <Form {...args}></Form>;

export const Primary = Template.bind({});
Primary.args = {
    onChange: () => { },
    onSubmit: () => { },
    props: {},
};