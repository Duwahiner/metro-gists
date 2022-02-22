import axios from 'axios'

import { getDetailGist, getGists, getGistUser, getShowError, getShowSpinner } from '../../reducers'
import { url } from '../../util/url'

export const getGistsPublics = (page) => {
  return (dispatch) => {
    dispatch(getShowSpinner({ actionShow: 'showSpinner', show: true }))
  
    axios
      .get(`${url.urlGistsPublics}?page=${page}&per_page=20`)
      .then(function (response) {
        const { data } = response

        dispatch(getGists({ gists: [...data] }))
      })
      .catch(function (error) {
        dispatch(getShowError({ actionShow: 'showError', show: true }))
      })
      .finally(function () {
        dispatch(getShowSpinner({ actionShow: 'showSpinner', show: false }))

      });
  }
}

export const getDetailGistPublic = (path) => {
  return (dispatch) => {
    dispatch(getShowSpinner({ actionShow: 'showSpinner', show: true }))
  
    axios
      .get(`${path}`)
      .then(function (response) {
        const { data } = response

        dispatch(getDetailGist({ itemGist: data }))
      })
      .catch(function (error) {
        dispatch(getShowError({ actionShow: 'showError', show: true }))
      })
      .finally(function () {
        dispatch(getShowSpinner({ actionShow: 'showSpinner', show: false }))

      });
  }
}

export const getGistUserPublic = (path, handleRedirect) => {
  return (dispatch) => {
    dispatch(getShowSpinner({ actionShow: 'showSpinner', show: true }))
  
    axios
      .get(`${path}`)
      .then(function (response) {
        const { data } = response

        dispatch(getGistUser({ itemUser: data }))

        setTimeout(() => handleRedirect(), 100)
      })
      .catch(function (error) {
        dispatch(getShowError({ actionShow: 'showError', show: true }))
      })
      .finally(function () {
        dispatch(getShowSpinner({ actionShow: 'showSpinner', show: false }))

      });
  }
}