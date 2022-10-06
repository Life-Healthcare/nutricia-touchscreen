export type User = {
  nutrison: {
    [key: string]: boolean;
  };
  firstName: string;
  lastName: string;
  emailAddress: string;
  placeOfWork: string;
  agreement: boolean;
};
