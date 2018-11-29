import Pages from '../pages';

const { NotFoundPage } = Pages;

const routes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: Pages.HomePage,
  },
  {
    key: 'contact',
    path: '/contact',
    exact: true,
    component: Pages.ContactPage,
  },
  {
    key: 'about',
    path: '/about',
    exact: true,
    component: Pages.AboutPage,
  },
  {
    key: 'product',
    path: '/product',
    exact: true,
    component: Pages.Product,
  },
  {
    key: 'cart',
    path: '/cart',
    exact: true,
    component: Pages.Cart,
  },
  {
    key: 'checkout',
    path: '/checkout',
    exact: true,
    component: Pages.Checkout,
  }
];

export {
  routes,
  NotFoundPage,
};
