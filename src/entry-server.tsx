import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { Router } from './router/routes';

interface renderI {
  path: string;
}

export const render = ({ path }: renderI) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );
};
