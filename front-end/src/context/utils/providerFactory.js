import React from 'react';
import PropTypes from 'prop-types';

export default (DataContext, ActionContext) => Object.assign((
  { children, dataValue, actionValue },
) => (
  <DataContext.Provider value={ dataValue }>
    <ActionContext.Provider value={ actionValue }>
      { children }
    </ActionContext.Provider>
  </DataContext.Provider>
),
{ propTypes: { children: PropTypes.node.isRequired } });
