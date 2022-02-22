
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Container as Content } from '../../util/template'
import { CurrentLink } from '../CurrentLink'
import { Image } from '../Image'
import logo from '../../assets/svg/logo-metro.svg'

const Container = styled(Content)`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bgHeader };
`

export const Logo = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        style={{ height: '100%' }}
      >
        <Grid item>
          <CurrentLink path='/'>
            <Image
              theme={theme}
              src={logo}
              alt='Logo metro.gists'
              width='auto'
              height={40}
            />
          </CurrentLink>
        </Grid>
      </Grid>
    </Container>
  )
}

Logo.propTypes = {
  theme: PropTypes.object.isRequired,
}