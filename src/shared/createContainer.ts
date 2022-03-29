import ReactDOM from 'react-dom';
import { ReactElement } from 'react';


export type renderTestComponent = (component: ReactElement) => void | Element | React.Component<any, any, any>

export const createContainer = () => {
  const container = document.createElement('div');

  return {
    container,
    // eslint-disable-next-line react/no-render-return-value
    render: (component: ReactElement) => ReactDOM.render(component, container)
  };
};
