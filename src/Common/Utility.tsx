import {MouseEvent} from 'react';

export const preventDefault = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => event.preventDefault();
