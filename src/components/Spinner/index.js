import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import BeatLoader from 'react-spinners/BeatLoader'
import { css } from '@emotion/react'

import { Container as Ct, WrapperContainer as WC } from '../../util/template'

const Container = styled(Ct)`
  background-color: ${({ bgSpinner }) => bgSpinner};
  position: fixed;
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  z-index: 1000;
  top: 0;
  bottom: 0;
`

const WrapperContainer = styled(WC)`
   border-radius: 3px;
  box-sizing: border-box;
  padding: 32px;
  width: 450px;
  min-width: 480px;
  z-index: 10;
`
const override = css`
  display: block;
  margin: 0 auto;
`

export const Spinner = ({ theme }) => {
  return (
    <Container bgSpinner={theme.colors.bgSpinner}>
      <WrapperContainer>
        <WC width={1} flexDirection='column' alignItems='center'>
          <BeatLoader
            color={theme.colors.bgHeader}
            loading
            css={override} size={22}
            speedMultiplier={2.2}
          />
        </WC>
      </WrapperContainer>
    </Container>
  )
}

Spinner.propTypes = {
  theme: PropTypes.object,
}
