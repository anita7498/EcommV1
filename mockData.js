const users = [
  {
    "id": "1",
    "name": "Amit Sharma",
    "email": "amit.sharma@example.com",
  },
  {
    "id": "2",
    "name": "Priya Singh",
    "email": "priya.singh@example.com",
  },
  {
    "id": "3",
    "name": "Rahul Verma",
    "email": "rahul.verma@example.com",
  },
  {
    "id": "4",
    "name": "Sneha Gupta",
    "email": "sneha.gupta@example.com",
  },
  {
    "id": "5",
    "name": "Ankit Kumar",
    "email": "ankit.kumar@example.com",
  },
  {
    "id": "6",
    "name": "Pooja Yadav",
    "email": "pooja.yadav@example.com",
  },
  {
    "id": "7",
    "name": "Vikash Patel",
    "email": "vikash.patel@example.com",
  },
  {
    "id": "8",
    "name": "Neha Mishra",
    "email": "neha.mishra@example.com",
  },
  {
    "id": "9",
    "name": "Rohit Das",
    "email": "rohit.das@example.com",
  },
  {
    "id": "10",
    "name": "Kavita Joshi",
    "email": "kavita.joshi@example.com",
  }
]

const orders = [
  {
    "id": "101",
    "userId": "1",
    "product": "Laptop",
    "price": 55000,
    "status": "DELIVERED",
    "createdAt": "2026-04-01"
  },
  {
    "id": "102",
    "userId": "1",
    "product": "Wireless Mouse",
    "price": 1200,
    "status": "DELIVERED",
    "createdAt": "2026-04-10"
  },
  {
    "id": "103",
    "userId": "2",
    "product": "Smartphone",
    "price": 22000,
    "status": "SHIPPED",
    "createdAt": "2026-04-12"
  },
  {
    "id": "104",
    "userId": "2",
    "product": "Headphones",
    "price": 2500,
    "status": "PENDING",
    "createdAt": "2026-04-15"
  },
  {
    "id": "105",
    "userId": "3",
    "product": "Tablet",
    "price": 18000,
    "status": "DELIVERED",
    "createdAt": "2026-04-18"
  }
]

const wishlists = [
  {
    "id": "201",
    "userId": "1",
    "product": "Gaming Keyboard",
    "price": 3000,
    "addedAt": "2026-04-05"
  },
  {
    "id": "202",
    "userId": "1",
    "product": "Monitor",
    "price": 15000,
    "addedAt": "2026-04-11"
  },
  {
    "id": "203",
    "userId": "2",
    "product": "Smartwatch",
    "price": 8000,
    "addedAt": "2026-04-13"
  },
  {
    "id": "204",
    "userId": "3",
    "product": "Bluetooth Speaker",
    "price": 2000,
    "addedAt": "2026-04-16"
  },
  {
    "id": "205",
    "userId": "3",
    "product": "External Hard Drive",
    "price": 5000,
    "addedAt": "2026-04-20"
  }
]

export { users, orders, wishlists }