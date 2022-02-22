import PropTypes from 'prop-types'

import { CardsDetailGists } from "../../components/CardsDetailGists"
import Layout from "../../components/Layout"
import { Container, WrapperContainer } from "../../util/template"

const DetailGistsRauterView = ({ theme, pagination, data }) => {
  return (
   <Layout theme={theme} pagination={pagination}>
      <Container width={1} height='auto' py={2} px={2}>
        <WrapperContainer mt={4} justifyContent='center'>
          <CardsDetailGists theme={theme} data={data} />
        </WrapperContainer>
      </Container>
   </Layout>
  )
}

DetailGistsRauterView.propTypes = {
  theme: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}



export default DetailGistsRauterView