

import { Switch,Redirect } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
 export const createRoutes = (modules: any[]) => { // Вам нужно адаптировать тип modules в соответствии с вашим проектом
  const routesFromModules = modules.flatMap(module => module.getRoutes());
  // Используем flatMap для преобразования массива массивов в один плоский массив
  return (
    <Switch>
    <Redirect exact from="/" to="/home" />
      {routesFromModules}
    </Switch>
  );
};