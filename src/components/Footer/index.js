import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Container as Content,  WrapperContainer } from '../../util/template'
import { CurrentPagination } from '../CurrentPagination'
import { Text } from '../Text'

const Container = styled(Content)`
  width: 100%;
  border-top:
    solid 1px ${({ theme }) => theme.colors.borderColor };
`

export const Footer = ({ theme, pagination }) => {
  return (
    <Container width={1} theme={theme} py={1}>
      <WrapperContainer width={1}>
        <Grid 
          container
          justifyContent='center'
          alignItems='center'
          style={{ height: '100%', backgroundColor: ''}}
        >
          <Grid item>
            {
              pagination.pathname === '/detail-gist' 
                ? (
                  <Text
                    type='span'
                    fontFamily='RobotoLight'
                    title='Detalle gists'
                    fontSize='12px'
                    textAlign='center'
                    color={theme.colors.colorText}
                  />
                  )
                : <CurrentPagination theme={theme} pagination={pagination} />
            }
          </Grid>
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

Footer.propTypes = {
  theme: PropTypes.object,
  pagination: PropTypes.object.isRequired
}
