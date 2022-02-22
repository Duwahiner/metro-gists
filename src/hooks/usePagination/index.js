import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setPaginationPage } from '../../reducers'

export const usePagination = (init) => {
  const dispatch = useDispatch()

  const [page, setPage] = useState(init.page)

  const handleChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => dispatch(setPaginationPage({ page })), [page])

  return {
    page,
    setPage,
    count: init.count,
    handleChange
  }
}
