import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, } from '@mui/material'
import Stack from '@mui/material/Stack'

export const CurrentPagination = ({ pagination }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={pagination.count}
        page={pagination.page}
        onChange={pagination.handleChange}
      />
    </Stack>
  )
}

CurrentPagination.propTypes = {
  pagination: PropTypes.object.isRequired
}
