import { useRoutes } from 'react-router-dom';

export default function Router() {
  // const authState = useSelector((state: any) => state.auth);
  return useRoutes([
    {
      path: '/',
      element: "home"
    },
    {
      path: '/login',
      element: "Login",
    },
  ]);
}
