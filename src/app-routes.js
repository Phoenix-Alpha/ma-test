import { withNavigationWatcher } from './contexts/navigation';
import { DashboardPage, DataGridPage } from './pages';

const routes = [
  {
    path: '/dashboard',
    component: DashboardPage
  },
  {
    path: '/datagrid',
    component: DataGridPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
