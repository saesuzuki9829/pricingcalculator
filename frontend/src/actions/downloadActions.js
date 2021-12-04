export const savePersonalInformation = (data) => (dispatch) => {
    dispatch({
      type: DOWNLOAD_SAVE_PERSONAL_INFOMATION,
      payload: data,
    })
  
    localStorage.setItem('personalInfomation', JSON.stringify(data))
  }