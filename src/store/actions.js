export const CHANGE_AUTH = 'AUTH_CHANGE';
export const CHANGE_THEME = 'CHANGE_THEME';

export const changeAuth = (authenticated, dispatch) => {

    dispatch({
        type: CHANGE_AUTH,
        payload: authenticated
    });

    dispatch({
        type: CHANGE_THEME,
        payload: authenticated ? 'success' : 'primary'
    });
};

export const changeTheme = (theme, dispatch) => {

    dispatch({
        type: CHANGE_THEME,
        payload: theme
    });
};
