import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container as Ct, WrapperContainer as WC } from '../../util/template'


const Container = styled(Ct)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
const WrapperContainer = styled(WC)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 10;
`
const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  flex: none;
`
const ContainerMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  background-color: transparent;
  overflow: auto;

  &::-webkit-scrollbar {
    display: block;
    background: #F6F6F6;
    width: 5px
  }

  &::-webkit-scrollbar-thumb {
    background: #D6DBDF;
    border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb:hover{
    background: #000;
  }
`
const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  flex: none;
`

const Layout = ({
  theme,
  children,
  pagination
}) => {
  return (
    <Container>
      <WrapperContainer>
        <ContainerHeader>
          <Header theme={theme} pagination={pagination} />
        </ContainerHeader>

        <ContainerMain>
          {children}
        </ContainerMain>

        <ContainerFooter>
          <Footer theme={theme} pagination={pagination} />
        </ContainerFooter>
      </WrapperContainer>
    </Container>
  )
}

export default Layout

Layout.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.object,
  pagination: PropTypes.object
}
