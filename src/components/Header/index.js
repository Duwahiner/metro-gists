import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import {  Container, WrapperContainer } from '../../util/template'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

export const Header = ({ theme, pagination }) => {
  return (
    <Container width={1}>
      <WrapperContainer width={1}>
        <Grid container>
          <Grid
            container
            item 
            xs={12} 
            sm={12}
            md={12}
            justifyContent='center'
          >
            <Logo theme={theme} />
          </Grid>

          {
            pagination.pathname !== '/'
              ? (
                  <Grid
                  container
                  item 
                  xs={12}
                  sm={12}
                  md={12}
                  justifyContent='center'
                >
                  <Menu theme={theme} />
                </Grid>
                )
              : null
          }
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

Header.propTypes = {
  theme: PropTypes.object.isRequired
}
