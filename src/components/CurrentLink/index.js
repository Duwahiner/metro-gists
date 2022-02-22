import styled from '@emotion/styled'
import { Link as Links } from 'react-router-dom'
import PropTypes from 'prop-types'

const Link = styled(Links)`
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`

export const CurrentLink = ({ children, path }) => {
  return (
    <Link to={path}>
      { children }
    </Link>
  )
}

Link.propTypes = {
  children: PropTypes.object,
  path: PropTypes.string
}
