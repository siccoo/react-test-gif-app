import * as actionType from "./types";

export const fetchImages = (data) => {
    return { 
        type: actionType.FETCHGIPHYS, 
        payload: data 
    };
};

export const loadMoreImages = (data) => {
    return { 
        type: actionType.FETCHMOREGIPHYS, 
        payload: data 
    };
};

export const loadOneImage = (data) => {
    return {
        type: actionType.FETCHONEGIPHY,
        payload: data
    };
};
