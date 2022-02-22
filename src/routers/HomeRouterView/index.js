import { Box } from '@mui/material'
import styled from "@emotion/styled"
import PropTypes from 'prop-types'

import { Cards } from "../../components/Cards"
import Layout from "../../components/Layout"
import { Container as Ct, WrapperContainer as WC} from "../../util/template"

const Container = styled(Ct)`
  max-width: 960px;
  margin: 0 auto;
  background-color: 'red';
`

const WrapperContainer = styled(WC)`
  width: auto;
  background-color: 'red';
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  div:nth-of-type(1n+0) {
  }
`

const HomeRouterView = ({
  theme,
  pagination,
  data,
  cardsData
}) => {
  return (
    <Layout
      theme={theme}
      pagination={pagination}
    >
      <Container width={1} height='' py={2} px={2} bgcolor=''>
        <WrapperContainer>
          {
            data && data.map((item, index) => {
              return (
                <Box key={index}>
                  <Cards item={item} theme={theme} cardsData={cardsData}/>
                </Box>
              )
            })
          }
        </WrapperContainer>
      </Container>
    </Layout>
  )
}

HomeRouterView.propTypes = {
  theme: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}


export default HomeRouterView