import { 
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 1.30,
                orderNumber: '24343sdfkjh72',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '1337 West State Street'
                }
            },
            {
                _id: 2,
                total: 50.30,
                orderNumber: 'B0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 75.40,
                orderNumber: '00235785',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Max Asher Nelson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 8.40,
                orderNumber: '0003748500',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 10.40,
                orderNumber: '051bag56',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '5 grand street'
                }
            },
            {
                _id: 6,
                total: 35.40,
                orderNumber: '000xx123',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 45.20,
                orderNumber: '5UFISHDFJASUSHI298',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Wold',
                    shippingAddress: '348 Yo State Street'
                }
            },
        ]
    })
}