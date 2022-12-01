import { Endpoint } from "./Types";


export const API_ROOT_URL: string = process.env.REACT_APP_API_ROOT_URL!;

export const API_ENDPOINT: Endpoint =
{
    COMPANY: `${API_ROOT_URL}/company`
};