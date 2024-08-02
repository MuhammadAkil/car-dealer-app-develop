export type CustomerType = {
  id: string;
  name: string;
  avatarURL: string;
  email: string;
  phone: string;
  createdAt: string;
  userName: string;
  amount: string;
  status: string;
};

export const CustomersData: CustomerType[] = [
  {
    id: "1",
    name: "John Doe",
    avatarURL: "/cars/chevrolet.jpg",
    email: "johndoe@example.com",
    phone: "+1234567890",
    createdAt: "2023-01-01T12:00:00Z",
    userName: "johndoe101",
    amount: "$150.00",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatarURL: "/cars/chevrolet.jpg",
    email: "janesmith@example.com",
    phone: "+0987654321",
    createdAt: "2023-02-15T08:30:00Z",
    userName: "janesmith102",
    amount: "$200.00",
    status: "inactive",
  },
  {
    id: "3",
    name: "Alice Johnson",
    avatarURL: "/cars/chevrolet.jpg",
    email: "alicejohnson@example.com",
    phone: "+1122334455",
    createdAt: "2023-03-20T14:45:00Z",
    userName: "alicejohnson103",
    amount: "$300.00",
    status: "pending",
  },
  {
    id: "4",
    name: "Bob Brown",
    avatarURL: "/cars/chevrolet.jpg",
    email: "bobbrown@example.com",
    phone: "+1223344556",
    createdAt: "2023-04-10T09:20:00Z",
    userName: "bobbrown104",
    amount: "$400.00",
    status: "active",
  },
  {
    id: "5",
    name: "Carol White",
    avatarURL: "/cars/chevrolet.jpg",
    email: "carolwhite@example.com",
    phone: "+1334455667",
    createdAt: "2023-05-25T11:10:00Z",
    userName: "carolwhite105",
    amount: "$500.00",
    status: "inactive",
  },
];



export const headerColsForCustomer = [
  'customer',
  "name",
  "phone",
  "createdAt",
  "userName",
  "amount",
  "status",
  "action",
  // id: string;
  // name: string;
  // avatarURL: string;
  // email: string;
  // phone: string;
  // createdAt: string;
  // userName: string;
  // amount: string;
  // status: string;
];

