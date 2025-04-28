import { personalData } from "@/utils/data/personal-data";

// Fetch single blog post for SSR
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }

  return res.json();
}

// Page component with SSR
export default async function BlogDetails({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}
