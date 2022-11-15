import { rest } from 'msw';

let customers = [
  {
    customerId: 1,
    firstName: 'Fake #1',
    middleInitial: '',
    lastName: 'Customer',
    phone: '123-456-7890',
    email: 'fake@fakity.com',
  },
  {
    customerId: 2,
    firstName: 'Fake #2',
    middleInitial: '',
    lastName: 'Customer',
    phone: '0987654321',
    email: 'not@really.com',
  },
];

export const handlers = [
  rest.get('http://localhost:3000/api/v1/customers', (req, res, context) => {
    return res(
      context.status(200),
      context.json(customers)
    );
  }),
];