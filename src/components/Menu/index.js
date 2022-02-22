import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Container as Content, WrapperContainer } from '../../util/template'
import { CurrentLink } from '../CurrentLink'
import { Text } from '../Text'

const Container = styled(Content)`
  width: 100%;
  border-bottom:
    solid 1px ${({ theme }) => theme.colors.borderColor};
`

export const Menu = ({ theme }) => {
  return (
    <Container theme={theme} py={1.2}>
      <WrapperContainer>
        <Grid container justifyContent='center'>
          <Grid item>
            <CurrentLink path='/'>
              <Text
                type='span'
                fontFamily='RobotoLight'
                title='Regresar al inicio'
                fontSize='14px'
                textAlign='center'
                color={theme.colors.colorText}
              />
            </CurrentLink>
          </Grid>
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

Menu.propTypes = {
  theme: PropTypes.object.isRequired,
}
