export type BlogCard = {
  title: string;
  smallDescription: string;
  currentSlug: string;
  date: string;
  image: any;
};

export type FullBlog = {
  currentSlug: string;
  title: string;
  content: any;
  image: any;
};

export type Faq = {
  question: string;
  answer: string;
};
