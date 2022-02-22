import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Container as Content } from '../../util/template'
import { Text } from '../Text'
import { ButtonPrimary } from '../ButtonPrimary'
import { overflowText } from '../../util/overflowText'

const Container = styled(Content)`
  width: 300px;
  height: 190px;
  padding: 15px;
  border: solid 1px ${({ theme }) => theme.colors.borderColor };
  border-radius: 6px;
  box-sizing: border-box;
  margin: 10px 10px;

  @media (max-width: 420px) {
    width: 280px;
    margin: 10px 0px;
  }
`

const ContainerAvatar = styled(Box)`
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.borderColor };
  background: ${({ bgImg }) => `url(${ bgImg }) no-repeat center center`}; 
  background-size: cover;
  border-radius: 50%;
`

export const Cards = ({ theme, item, cardsData }) => {
  return (
    <Container theme={theme}>
      <Grid
        container
        justifyContent='flex-start'
        flexDirection='column'
        style={{ height: '100%' }}
      >
        <Grid container item alignItems='center' flex='none' >
          <Grid item xs={2} style={{ marginRight: '15px' }}>
            <ContainerAvatar theme={theme} bgImg={item?.owner?.avatar_url} />
          </Grid>

          <Grid container item xs={9} flexDirection='column'>
            <Grid item style={{ background: '' }}>
              <Text
                as='span'
                title={item?.owner?.login ? item?.owner?.login : 'Anonymous'}
                fontSize='1rem'
                fontFamily='RobotoBold'
                color={theme.colors.bgHeader}
              />
            </Grid>

            <Grid item style={{ background: '' }}>
              <Text
                as='span'
                title={
                  overflowText(
                    item?.created_at?.replace('T', ' - '), {init: 0, end: 18 }
                )}
                fontSize='0.8rem'
                fontFamily='RobotoLight'
                color={theme.colors.colorText}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection='column'
          justifyContent='space-between'
          flex='auto'
          style={{ overflow: 'hidden' }}
        >
          <Grid item style={{ background: '' }}>
            <Box my={1} maxHeight=''>
              <Text
                as='span'
                title={
                  item?.description
                    ? overflowText(item?.description, {init: 0, end: 100 })
                    : 'Sin descripción'
                }
                fontSize='0.8rem'
                fontFamily='RobotoLight'
                color={theme.colors.colorText}
              />
            </Box>
          </Grid>

          <Grid item style={{ background: '' }}>
            <ButtonPrimary
              title='Ver detalle'
              theme={theme}
              handleOnClick={() => cardsData.handleGetDetail({
                urlGist: item.url,
                urlUser: item.owner.url
              })}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

Cards.propTypes = {
  theme: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  cardsData: PropTypes.object.isRequired,
}

