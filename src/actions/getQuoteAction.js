import { GET_QUOTE } from './types';
//we wanna think of the dispatch as a resolver
//as when we send the data we call dispatch
export const getQuote = () => dispatch => {
       dispatch({
            type: GET_QUOTE
        })
     
}
