import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Container as Content } from '../../util/template'
import { Text } from '../Text'
import { ButtonPrimary } from '../ButtonPrimary'
import { overflowText } from '../../util/overflowText'

const Container = styled(Content)`
  width: 100%;
  max-width: 400px;
  height: auto;
  box-sizing: border-box;
  background: 'red';
`

const ContainerAvatar = styled(Box)`
  width: 180px;
  height: 180px;
  overflow: hidden;
  background-color:
    ${({ theme }) => theme.colors.borderColor };
  background:
    ${({ bgImg }) => `url(${ bgImg }) no-repeat center center`}; 
  background-size: cover;
  border-radius: 50%;
  flex: none;
`

export const CardsDetailGists = ({ theme, data }) => {
  return (
    <Container theme={theme}>
      <Grid
        container
        justifyContent='center'
        style={{ height: '100%' }}
      >
        <Grid
          container
          item
          justifyContent='center'
          alignItems='center'
          style={{ marginBottom: '20px' }}
        >
          <ContainerAvatar
            theme={theme}
            bgImg={data?.itemGist.owner?.avatar_url}
          />
        </Grid>
          
        <Box>
          <Grid container item justifyContent='center'>
            <Grid
              container
              item
              flexDirection='column'
              alignItems='center'
              style={{
                background: '',
                borderBottom: `solid 1px ${theme.colors.borderColor}`,
                paddingBottom: '5px'
              }}
            >
              <Grid item>
                <Text
                  as='span'
                  title={
                    data?.itemGistUser?.name
                      ? data?.itemGistUser?.name
                      : 'Anonymous'
                    }
                  fontSize='1.3rem'
                  fontFamily='RobotoBold'
                  color={theme.colors.bgHeader}
                />
              </Grid>

              <Grid item style={{ background: '' }}>
                <Text
                  as='span'
                  title={
                    overflowText(
                      data?.itemGist?.created_at?.replace('T', ' - '),
                      {init: 0, end: 18 }
                    )
                  }
                  fontSize='0.8rem'
                  fontFamily='RobotoLight'
                  color={theme.colors.colorText}
                />
              </Grid>
            </Grid>

            
            <Grid
              container
              flexDirection='column'
              alignItems=''
              flex='auto'
              style={{ overflow: 'hidden' }}
            >
              <Grid item>
                <Box my={1} maxHeight=''>
                  <Text
                    as='span'
                    title={
                      data?.itemGist?.description
                        ? 
                          overflowText(data?.itemGist?.description, {init: 0, end: 250 })
                        : 
                          'Sin descripción'
                    }
                    fontSize='0.8rem'
                    fontFamily='RobotoLight'
                    color={theme.colors.colorText}
                  />
                </Box>
              </Grid>

              <Grid item style={{ marginTop: '10px' }}>
                <ButtonPrimary
                  width='150px'
                  title='Visitar'
                  theme={theme}
                  handleOnClick={() => 
                    data.handleRedirect(data?.itemGistUser?.html_url)
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
}

CardsDetailGists.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

