import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  getCurrentDataGistSelector,
  getCurrentDataGistUserSelector,
  getPaginationsSelector
} from '../../selectors'

import { DetailGistsRauterView } from '../../routers'
import { useTheme } from '../../hooks/useTheme'
import { usePagination } from '../../hooks/usePagination'

const ContainerDetailGists = (props) => {
  const paginet = useSelector(getPaginationsSelector)
  const itemGist = useSelector(getCurrentDataGistSelector)
  const itemGistUser = useSelector(getCurrentDataGistUserSelector)

  const theme = useTheme()
  const location = useLocation()
  const pagination = usePagination(paginet)

  const handleRedirect = (path) => window.open(path)


  return (
    <DetailGistsRauterView
      theme={theme}
      data={{ itemGist, itemGistUser, handleRedirect }}
      pagination={{ ...pagination, pathname: location.pathname }}
    />
  )
}

export default ContainerDetailGists
