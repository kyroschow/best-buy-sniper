import productionTasks from '@config/prod/tasks.json';
import productionCustomerInformation from '@config/prod/customer.json';
import productionPaymentInformation from '@config/prod/payment.json';
import productionNotificationsInformation from '@config/prod/notifications.json';
import productionLoginInformation from '@config/prod/login.json';

export interface CustomerInformation {
  address: string;
  addressSecondLine?: string;
  budget: number;
  city: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  zipcode: string;
}

export interface PaymentInformation {
  creditCardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  address: string;
  city: string;
  firstName: string;
  lastName: string;
  state: string;
  zipcode: string;
}

export const getTasks = () => {
  return productionTasks;
};

export interface LoginInformation {
  email: string;
  password: string;
}

export const getCustomerInformation = (): CustomerInformation => {
  return productionCustomerInformation;
};

export const getPaymentInformation = (): PaymentInformation => {
  return productionPaymentInformation;
};

export const getLoginInformation = (): LoginInformation => {
  return productionLoginInformation;
};

export const getNotificationsInformation = (): any => {
  return productionNotificationsInformation;
};
