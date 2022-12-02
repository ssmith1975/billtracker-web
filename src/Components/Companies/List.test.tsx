import React from 'react';
//import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import List from './List';
import mockFetch from '../../mocks/mockFetch';


beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetch);
    
 })
 
 afterEach(() => {
    //global.fetc;
    //delete global.fetch;
 });

describe('Companies List', () => {
    const fakeData = [{
        id: "6388bf4d7c49d429f95ca004",
        name: "Acme 1 Inc",
        url: "https://acme1.com",
        accountNumber: "111",
        phone: "111-111-1111",
        dateCreatedUTC: "2022-12-01T14:50:53.102Z"
      }];  

    global.fetch = jest.fn(() =>
        Promise.resolve({
        json: () => Promise.resolve(fakeData),
        }),
    ) as jest.Mock;


    it('renders title', async() => {


        
          // Use the asynchronous version of act to apply resolved promises
          await act(async () => {
            render(<List data={fakeData} />, container);
          });
        
          expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
          expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
          expect(container.textContent).toContain(fakeUser.address);
        
          // remove the mock to ensure tests are completely isolated
          global.fetch.mockRestore();
    });

});
