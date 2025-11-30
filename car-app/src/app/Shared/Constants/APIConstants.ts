export const APIConstants = {
  CARS: {
    GET_ALL: 'cars',
    GET_BY_ID: (id: string) => `cars/${id}`,
    CREATE: 'cars',
    //UPDATE: (id: string) => `cars/${id}`,
    DELETE: (id: string) => `cars/${id}`,
  },
  CarTypeCategoryFilter: {
    GET_ALL: '/CarTypeCategoryFilter',
  },
  CARTYPE: {
    GET_ALL: '/CarType',
    GET_BY_ID: (id: string) => `/CarType/${id}`,
    CREATE: '/CarType',
    //UPDATE: (id: string) => `/CarType/${id}`,
    DELETE: (id: string) => `/CarType/${id}`,
  },
  CATEGORY: {
    GET_ALL: '/category',
    GET_BY_ID: (id: string) => `/category/${id}`,
    CREATE: '/category',
    //UPDATE: (id: string) => `/category/${id}`,
    DELETE: (id: string) => `/category/${id}`,
  },
  Finance: {
    CALCULATE_INSTALLMENT: '/Finance/calculate-installments',
  },
};
