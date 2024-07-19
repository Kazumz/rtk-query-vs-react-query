import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';

/*
Simplistic example of a custom hook that uses react-query to fetch data from an API.
 */
export default function useAPI<T = object>(
    key: string,
    url: string,
    queryData?: Record<string, string>,
    shouldRun: boolean = true
) {
    return useQuery({
        queryKey: [key],
        queryFn: ({signal}) => {
            let queryString = undefined;
            if (queryData) {
                const params = new URLSearchParams(queryData);
                queryString = `?${params.toString()}`;
            }

            return axios.get<T>(`${url}${queryString ? queryString : ''}`, {
                signal,
            });
        },
        enabled: shouldRun
    })

}