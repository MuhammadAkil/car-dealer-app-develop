export type CustomerType = {
  id: string;
  name: string;
  avatarURL: string;
  email: string;
  phone: string;
  createdAt: string;
  time:string,
  userName: string;
  amount: string;
  status: string;
};

export const CustomersData: CustomerType[] = [
  {
    id: "1",
    name: "John Doe",
    avatarURL: "/customers/profile-pic.jpg",
    email: "johndoe@example.com",
    phone: "+1234567890",
    createdAt: "Dec 2, 2022",
    time:"3:43 AM",
    userName: "johndoe101",
    amount: "$150.00",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatarURL: "/customers/profile-pic.jpg",
    email: "janesmith@example.com",
    phone: "+0987654321",
    createdAt: "November 3, 2022",
    time:"9:46 PM",
    userName: "janesmith102",
    amount: "$200.00",
    status: "inactive",
  },
  {
    id: "3",
    name: "Alice Johnson",
    avatarURL: "/customers/profile-pic.jpg",
    email: "alicejohnson@example.com",
    phone: "+1122334455",
    createdAt: "Oct 2, 2022",
    time:"1:40 PM",
    userName: "alicejohnson103",
    amount: "$300.00",
    status: "pending",
  },
  {
    id: "4",
    name: "Bob Brown",
    avatarURL: "/customers/profile-pic.jpg",
    email: "bobbrown@example.com",
    phone: "+1223344556",
    createdAt: "March 2, 2022",
    time:"9:49 AM",
    userName: "bobbrown104",
    amount: "$400.00",
    status: "active",
  },
  {
    id: "5",
    name: "Carol White",
    avatarURL: "/customers/profile-pic.jpg",
    email: "carolwhite@example.com",
    phone: "+1334455667",
    createdAt: "November 2, 2022",
    time:"8:23 PM",
    userName: "carolwhite105",
    amount: "$500.00",
    status: "inactive",
  },
];



export const headerColsForCustomer = [
  "checked",
  'customer',
  "name",
  "phone",
  "createdAt",
  'time',
  "userName",
  "amount",
  "status",
  "action",
];

