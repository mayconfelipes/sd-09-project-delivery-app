import paths from '../Routes/paths';
import testIds from './testIds';

const pageItems = {
  customer: {
    navItems: [
      {
        text: 'Produtos',
        testId: testIds.id11,
        path: paths.customer.products,
      },
      {
        text: 'Meus pedidos',
        testId: testIds.id12,
        path: paths.customer.orders,
      },
    ],
  },
  seller: {},
  administrator: {},
};

export default (role) => pageItems[role];
