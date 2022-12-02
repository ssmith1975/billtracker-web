
import { API_ENDPOINT } from '../Common/Constants';

const fakeData = [{
    id: "6388bf4d7c49d429f95ca004",
    name: "Acme 1 Inc",
    url: "https://acme1.com",
    accountNumber: "111",
    phone: "111-111-1111",
    dateCreatedUTC: "2022-12-01T14:50:53.102Z"
  }]; 


export default async function mockFetch(url:string) {
    switch (url) {
        case API_ENDPOINT.COMPANY: {
            return {
                ok: true,
                status: 200,
                json: async () => fakeData,
            };
        }
        // case "https://dog.ceo/api/breed/husky/images" :
        // case "https://dog.ceo/api/breed/cattledog/images": {
        //     return {
        //         ok: true,
        //         status: 200,
        //         json: async () => dogImagesResponse,
        //     };
        // }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}