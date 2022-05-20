import React from 'react';

import Balance from '.';

export default {
    title: 'Example/Balance',
    component: Balance,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
        },
    },
};

const Template = (args) => <Balance {...args} />;

export const Income = Template.bind({});
Income.args = {
    variant: 'primary',

};