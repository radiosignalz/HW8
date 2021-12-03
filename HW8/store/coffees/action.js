

export const SET_ERROR_COFFEES = "SET_ERROR_COFFEES";
export const SET_LOADING_COFFEES = "SET_LOADING_COFFEES";
export const SET_DATA_COFFEES = "SET_DATA_COFFEES";

export const setLoading = (status) => ({
    type: SET_LOADING_COFFEES,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR_COFFEES,
    payload: status
});

export const setData = (todos) => ({
    type: SET_DATA_COFFEES,
    payload: todos
});




const BLOCKS_API = "https://jsonplaceholder.typicode.com/photos"



export const getRandomCoffees = async (dispatch) => {

    dispatch(setLoading(true))
    dispatch(setError(false))
    dispatch(setData([]))

    try {
        const response = await fetch(BLOCKS_API);

        if (!response.ok) {
            throw new Error('any error')
        }

        const result =
            await response.json()



        dispatch(setData(result))
    } catch (e) {
        console.error(e);
        dispatch(setError(true))
    }

    dispatch(setLoading(false))
}