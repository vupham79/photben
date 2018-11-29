import fetchAPI from '../utils/service';

function loginRequest() {
  return {
    type: 'LOGIN_REQUEST',
  };
}
function loginSuccess(payload) {
  return {
    type: 'LOGIN_SUCCESS',
    payload,
  };
}
function loginFailure() {
  return {
    type: 'LOGIN_FAILURE',
  };
}

function login({ data, response = { failure: () => {}, success: () => {} } }) {
  return async (dispatch) => {
    await dispatch(loginRequest());
    try {
      const res = await fetchAPI({
        method: 'POST',
        data,
        endpoints: '/user/login',
      });
      if (res.status === 200) {
        await dispatch(loginSuccess(res.data));
        await response.success();
      } else {
        await dispatch(loginFailure());
        await response.failure();
      }
    } catch (error) {
      await dispatch(loginFailure());
      await response.failure();
    }
  };
}

function logoutRequest() {
  return {
    type: 'LOGOUT_REQUEST',
  };
}

function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS',
  };
}

function logout(callback) {
  return async (dispatch) => {
    await dispatch(logoutRequest());
    await callback();
  };
}

function updateInfoRequest() {
  return {
    type: 'UPDATE_INFO_REQUEST',
  };
}
function updateInfoSuccess(payload) {
  return {
    type: 'UPDATE_INFO_SUCCESS',
    payload,
  };
}
function updateInfoFailure() {
  return {
    type: 'UPDATE_INFO_FAILURE',
  };
}

function updateInfo({ lecturerId, data = {}, response = { failure: () => {}, success: () => {} } }) {
  return async (dispatch) => {
    await dispatch(updateInfoRequest());
    try {
      const res = await fetchAPI({
        method: 'PATCH',
        data,
        endpoints: `/user/${lecturerId}`,
      });
      if (res.status === 200) {
        await dispatch(updateInfoSuccess(res.data));
        await response.success();
      } else {
        await dispatch(updateInfoFailure());
        await response.failure();
      }
    } catch (error) {
      await dispatch(updateInfoFailure());
      await response.failure();
    }
  };
}

function checkPasswordRequest() {
  return {
    type: 'CHECK_PASSWORD_REQUEST',
  };
}
function checkPasswordSuccess(payload) {
  return {
    type: 'CHECK_PASSWORD_SUCCESS',
    payload,
  };
}
function checkPasswordFailure(payload) {
  return {
    type: 'CHECK_PASSWORD_FAILURE',
    payload,
  };
}

function checkPassword({ data, response = { failure: () => {}, success: () => {} } }) {
  return async (dispatch) => {
    await dispatch(checkPasswordRequest());
    try {
      const res = await fetchAPI({
        method: 'POST',
        data,
        endpoints: '/user/login',
      });
      if (res.status === 200) {
        await dispatch(checkPasswordSuccess());
        await response.success();
      } else {
        await dispatch(checkPasswordFailure());
        await response.failure();
      }
    } catch (error) {
      await dispatch(checkPasswordFailure());
      await response.failure();
    }
  };
}

function getDetailUserRequest() {
  return {
    type: 'GET_DETAIL_USER_REQUEST',
  };
}
function getDetailUserSuccess(payload) {
  return {
    type: 'GET_DETAIL_USER_SUCCESS',
    payload,
  };
}
function getDetailUserFailure() {
  return {
    type: 'GET_DETAIL_USER_FAILURE',
  };
}

function getDetailUser(lecturerId) {
  return async (dispatch) => {
    await dispatch(getDetailUserRequest());
    try {
      const res = await fetchAPI({
        endpoints: `/user/lecturer/${lecturerId}`,
      });
      if (res.status === 200) {
        await dispatch(getDetailUserSuccess(res.data));
      } else {
        await dispatch(getDetailUserFailure());
      }
    } catch (error) {
      await dispatch(getDetailUserFailure());
    }
  };
}

export {
  login,
  logout,
  updateInfo,
  checkPassword,
  getDetailUser,
};
