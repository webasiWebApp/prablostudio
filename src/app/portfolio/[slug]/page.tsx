import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

async function getProject(slug: string) {
    const query = `*[_type == "project" && slug.current == "${slug}"][0]{
        title,
        category,
        year,
        mainImage,
        content
    }`;
    return await client.fetch(query);
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug);

    if (!project) return <div className="p-20 text-center font-normal uppercase">Project Impact Not Found</div>;

    return (
        <main className="bg-white min-h-screen pt-32 pb-20 px-[5%]">
            <div className="max-w-[1100px] mx-auto">
                <Link href="/portfolio" className="flex items-center gap-2 text-[10px] font-normal uppercase tracking-[0.3em] text-gray-400 hover:text-primary transition-colors mb-16">
                    <ArrowLeft size={14} /> Back to Selection
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
                    <div>
                        <h1 className="text-black text-6xl md:text-8xl font-normal uppercase leading-[0.85] tracking-tighter mb-8">
                            {project.title}
                        </h1>
                        <div className="flex gap-8 border-t border-gray-100 pt-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-gray-400 font-normal uppercase tracking-widest flex items-center gap-2"><Tag size={12} /> Category</span>
                                <span className="text-sm font-normal uppercase text-primary">{project.category}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-gray-400 font-normal uppercase tracking-widest flex items-center gap-2"><Calendar size={12} /> Year</span>
                                <span className="text-sm font-normal uppercase text-black">{project.year}</span>
                            </div>
                        </div>
                    </div>

                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
                        <img
                            src={urlFor(project.mainImage).url()}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="max-w-3xl border-t border-gray-100 pt-16">
                    <div className="prose prose-xl prose-orange max-w-none text-gray-600 leading-relaxed font-medium">
                        <PortableText value={project.content} />
                    </div>
                </div>
            </div>
        </main>
    );
}