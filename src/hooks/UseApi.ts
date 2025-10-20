import { useCallback, useEffect, useState } from "react";
import type { UseApiCall } from "../models/useApi.model";


//DEFINIENDO EL TIPADO DEL HOOK
type Data<T> = T | null
type CustomError = Error | null

type useApiOptions<P> = {
    autofetch?: boolean,
    params?: P
}

interface ApiResult<T, P> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetch: (param: P) => void;
}

export const UseApi = <T, P>(apiCall: (param: P) => UseApiCall<T>, options?: useApiOptions<P>): ApiResult<T, P> => {

    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<CustomError>(null)

    const fetch = useCallback((param: P) => {
        const { call, controller } = apiCall(param)
        setLoading(true)

        call.then(
            (response) => {
                setData(response.data)
                setError(null)
            },
        )
            .catch((error) => {
                setError(error)
            }).finally(() => {
                setLoading(false)
            })

        return () => controller.abort()
    }, [apiCall])

    useEffect(() => {
        if (options?.autofetch) {
            return fetch(options.params as P)
        }
    }, [fetch, options?.autofetch, options?.params])

    return { loading, data, error, fetch }
}
