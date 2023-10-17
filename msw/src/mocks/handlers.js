import { rest } from 'msw';

const foodList = [
  {
    id: 1,
    name: '브라우니',
  },
  {
    id: 2,
    name: '볶음밥',
  },
];

export const handlers = [
  rest.get('/foods', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(foodList));
  }),

  rest.post('/foods', (req, res, ctx) => {
    let foodID = foodList.length + 1;

    foodList.push({
      id: foodID,
      name: req.body,
    });

    return res(ctx.status(201), ctx.json(foodList));
  }),
];
