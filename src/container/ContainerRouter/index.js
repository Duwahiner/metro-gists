import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'

import { HomeRouterView } from '../../routers'
import { useTheme } from '../../hooks/useTheme'
import { usePagination } from '../../hooks/usePagination'
import { Spinner } from '../../components/Spinner'

import {
    getGistsPublicsSelector,
    getPaginationsSelector,
    getShowSpinerSelector
  } from '../../selectors'

import { 
  getGistsPublics,
  getDetailGistPublic,
  getGistUserPublic
  } from '../../services/api'

const ContainerRouter = (props) => {
  // Selectores para traer datos del store de resux
  const gists = useSelector(getGistsPublicsSelector)
  const paginet = useSelector(getPaginationsSelector)
  const showSpiner = useSelector(getShowSpinerSelector)

  const theme = useTheme()
  const dispatch = useDispatch()
  const navegate = useNavigate()
  const location = useLocation()
  const pagination = usePagination(paginet)
  
  // Consultando los detalles de un gist
  const handleGetDetail = ({ urlGist, urlUser }) => {
    dispatch(getDetailGistPublic(urlGist))
    dispatch(getGistUserPublic(urlUser, handleRedirect))
  }

  const handleRedirect = () => navegate('/detail-gist')

  useEffect(() => {
    dispatch(getGistsPublics(paginet.page))
  }, [paginet.page, dispatch])

  return (
    <Box>
      { showSpiner && <Spinner theme={theme}/> }

      <HomeRouterView
        theme={theme}
        pagination={{ 
          ...pagination,
          pathname: location.pathname
        }}
        data={gists}
        cardsData={{
          handleGetDetail
        }}
      />
    </Box>
  )
}

export default ContainerRouter
