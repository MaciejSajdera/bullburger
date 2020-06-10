import React from "react"
import "../styles/goorder.scss"

import Loadable from 'react-loadable';
import Loading from './order-button-modal';

const LoadableComponent = Loadable({
  loader: () => import('./order-button-modal'),
  loading: Loading,
});

export default class OrderButtonLoadable extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}