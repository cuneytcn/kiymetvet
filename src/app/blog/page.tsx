import BlogClient from "./BlogClient";

export const metadata = {
	title: "Blog",
	description:
		"Evcil hayvan sağlığı, bakımı ve beslenmesi hakkında uzman veteriner hekimlerimizden faydalı bilgiler.",
};

export default function Blog() {
	return <BlogClient />;
}
