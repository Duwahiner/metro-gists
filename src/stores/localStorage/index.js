export const loadState = () => {
  try {
    const serializedData = window.sessionStorage.getItem('state');
    if(serializedData === null){
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    window.sessionStorage.setItem('state', serializedData);
  } catch (error) {
    // aca podemos capturar o crear cualquier log que deseemos en caso que falle el salvado en el storage
  }
}


// window.localStorage.clear()
// window.sessionStorage.clear()