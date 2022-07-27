import fetch from 'node-fetch';

export const GET = async (
    url: string = '',
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await fetch(url, {
        method: 'GET',
        headers,
        signal,
    });
    return response.json();
};

export const POST = async (
    url: string = '',
    body: any = {},
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal,
    });
    return response.json();
};

export const PUT = async (
    url: string = '',
    body: any = {},
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
        signal,
    });
    return response.json();
};

export const DELETE = async (
    url: string = '',
    body: any = {},
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers,
        body: JSON.stringify(body),
        signal,
    });
    return response.json();
};

