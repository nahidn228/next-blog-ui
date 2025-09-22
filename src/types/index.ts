export interface IBlogs {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  picture: string;
  status: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
