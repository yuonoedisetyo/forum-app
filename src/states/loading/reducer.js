function loadingReducer(loading = false, action = {}) {
  if (action.type === 'LOADING') {
    return action.payload.loading;
  }
  return loading;
}

export { loadingReducer };
