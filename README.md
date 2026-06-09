# EcommV1
# GraphQL Session-Based Authentication API

## Overview

This project is a GraphQL API built with Apollo Server and Express that demonstrates session-based authentication using mock JSON data storage. The application allows users to log in, access protected resources, view their orders, apply filters, paginate results, and log out.

The primary goal of this project is to understand GraphQL schema design, resolver chaining, authentication using context, protected queries, filtering, and pagination.

---

## Features

### Authentication

* Session-based authentication
* User login with email and password
* Session token generation upon successful login
* Session validation through GraphQL context
* Protected GraphQL queries
* User logout with session invalidation

### User Queries

* Fetch authenticated user information using the `viewer` query
* Access user-specific data only after authentication

### Orders Management

* Fetch authenticated user's orders
* Filter orders by:

  * Status
  * Price
  * Order Date
* Offset based Pagination support for large result sets

### GraphQL Concepts Implemented

* Schema design
* Query resolvers
* Nested resolvers (resolver chaining)
* Context-based authentication
* Protected queries
* Error handling using GraphQLError
* Filtering and pagination

---

## Tech Stack

* Node.js
* Express.js
* Apollo Server
* GraphQL
* JavaScript
* JSON File Storage (Mock Database)
