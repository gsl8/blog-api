# Blog API

A RESTful API for a blog application built with Node.js, Express, and MongoDB. This API includes user authentication with JWT, role-based access control, and comprehensive CRUD operations for users, categories, and blog posts.

## Features

- User authentication and authorization with JWT
- Role-based access control (author and admin roles)
- Blog post management with category organization
- MongoDB database with Mongoose for data modeling
- Input validation and error handling
- API documentation using Postman

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token
- `GET /api/auth/me` - Get current user profile

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user (own account or admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get specific category
- `POST /api/categories` - Create new category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get specific blog
- `POST /api/blogs` - Create new blog (authenticated authors)
- `PUT /api/blogs/:id` - Update blog (original author or admin only)
- `DELETE /api/blogs/:id` - Delete blog (original author or admin only)
- `GET /api/blogs/category/:categoryId` - Get blogs by category
- `GET /api/blogs/search?q=searchTerm` - Search blogs

## Database Schema

### User Schema
```javascript
{
  name: String,
  email: String,
  password: String (hashed),
  role: String (author or admin),
  bio: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Category Schema
```javascript
{
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Blog Schema
```javascript
{
  title: String,
  content: String,
  author: ObjectId (ref: User),
  category: ObjectId (ref: Category),
  tags: [String],
  status: String (draft or published),
  createdAt: Date,
  updatedAt: Date
}
```

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/blog-api.git
cd blog-api
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog_api
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRATION=1d
```

4. Start the server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Testing

Test the API endpoints using Postman or Thunder Client. Import the provided collection file for pre-configured requests.

## Contributors

- [Contributor 1](https://github.com/contributor1)
- [Contributor 2](https://github.com/contributor2)

## License

This project is licensed under the MIT License.# blog-api
# blog-api
# blog-api
