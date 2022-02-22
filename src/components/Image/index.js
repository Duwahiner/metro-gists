import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Container } from '../../util/template'

const Ima = styled.img`
`

export const Image = ({
  theme,
  src,
  alt,
  width,
  height
}) => {
  return (
    <Container theme={theme}>
      <Ima src={src} alt={alt} width={width} height={height} />
    </Container>
  )
}

Image.propTypes = {
  theme: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}
