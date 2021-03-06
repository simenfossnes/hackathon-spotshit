import * as types from "./actionTypes";

export const updateFileAndImagePreview = (fileObj) => {
    return dispatch => {
        dispatch({
            type: types.UPDATE_FILE_AND_IMAGE_PREVIEW,
            payload: fileObj
        });
    }
};

export const updateTagline = (tagline) => {
    return dispatch => {
        dispatch({
            type: types.UPDATE_TAGLINE,
            payload: tagline
        });
    }
};