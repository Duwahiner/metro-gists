const GET_GISTS = 'GET_GISTS'
const SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE'
const GET_DETAIL_GIST = 'GET_DETAIL_GIST'
const GET_GIST_USER = 'GET_GIST_USER'
const GET_SHOW_SPINNER = 'GET_SHOW_SPINNER'
const GET_SHOW_ERROR = 'GET_SHOW_ERROR'

export const getGists = (data = {
  gists: []
}) => {
  return {
    type: GET_GISTS,
    payload: data
  }
}

export const getDetailGist = (data = {
  itemGist: {}
}) => {
  return {
    type: GET_DETAIL_GIST,
    payload: data
  }
}

export const getGistUser = (data = {
  itemUser: {}
}) => {
  return {
    type: GET_GIST_USER,
    payload: data
  }
}

export const setPaginationPage = (data = {
  page: 1
}) => {
  return {
    type: SET_PAGINATION_PAGE,
    payload: data
  }
}

export const getShowSpinner = (data = {
  actionShow: 'showSpinner',
  show: 1
}) => {
  return {
    type: GET_SHOW_SPINNER,
    payload: data
  }
}

export const getShowError = (data = {
  actionShow: 'showError',
  show: 1
}) => {
  return {
    type: GET_SHOW_ERROR,
    payload: data
  }
}

export const initialState = {
  data: { 
    gists: []
  },
  currenDataGist: {
    itemGist: {},
    itemUser: {}
  },
  pagination: {
    page: 1,
    count: 20
  },
  showSpinner: false,
  showError: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GISTS:
      return {
        ...state,
        data:  { 
          ...state.data, 
          gists: payload.gists 
        }
      }
    
    case GET_DETAIL_GIST:
      return {
        ...state,
        currenDataGist:  { 
          ...state.currenDataGist, 
          itemGist: payload.itemGist 
        }
      }

    case GET_GIST_USER:
      return {
        ...state,
        currenDataGist:  { 
          ...state.currenDataGist, 
          itemUser: payload.itemUser 
        }
      }
      
    case SET_PAGINATION_PAGE:
      return {
        ...state,
        pagination:  { 
          ...state.pagination, 
          page: payload.page 
        }
      }
    
    case GET_SHOW_SPINNER:
    case GET_SHOW_ERROR:
      return {
        ...state,
        [payload.actionShow]: payload.show 
      }

    default:
      return state
  }
}

