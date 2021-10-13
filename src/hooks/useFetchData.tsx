
import { useEffect, useRef, useReducer } from 'react';
import AxiosInstance from '../constants/AxioInstances';

interface State{
    status:string;
    error:any;
    data:[]
}

export const useFetch = (url:string) => {
	const initialState:State = {
		status: 'idle',
		error: null,
		data: [],
	};

	const [state, dispatch] = useReducer((state:State,action:any) => {
		switch (action.type) {
			case 'FETCHING':
				return { ...initialState, status: 'fetching' };
			case 'FETCHED':
				return { ...initialState, status: 'fetched', data: action.payload };
			case 'FETCH_ERROR':
				return { ...initialState, status: 'error', error: action.payload };
			default:
				return state;
		}
	}, initialState);

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: 'FETCHING' });
			
				try {
					const response = await AxiosInstance.get(url);
					const data = response.data
					dispatch({ type: 'FETCHED', payload: data });
				} catch (error) {
					dispatch({ type: 'FETCH_ERROR', payload: error.message });
				}
			
		};

		fetchData();

	}, [url]);

	return state;
};