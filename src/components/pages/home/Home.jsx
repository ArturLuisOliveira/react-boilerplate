import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

/**
 * Random Component
 * @augments {Component<Props, State>}
 */

export default function Home({ text }) {
    return <Typography>{text}</Typography>;
}

Home.protoTypes = {
    text: PropTypes.string
};
