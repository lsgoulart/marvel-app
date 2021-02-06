import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

const Route = ({ component: Component, ...props }) => (
  <Suspense fallback={<div />}>
    <Component {...props} />
  </Suspense>
)

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.instanceOf(Object)])
    .isRequired,
}

export default Route
