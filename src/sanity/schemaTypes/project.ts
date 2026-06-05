export default {
    name: 'project',
    title: 'Portfolio Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Designing Content', value: 'Designing Content' },
                    { title: 'Video Content', value: 'Video Content' },
                    { title: 'AI Content', value: 'AI Content' },
                     { title: 'Cinematography', value: 'Cinematography' },
                ],
            },
        },
        {
            name: 'size',
            title: 'Layout Size',
            type: 'string',
            options: {
                list: [
                    { title: 'Tall', value: 'tall' },
                    { title: 'Wide', value: 'wide' },
                    { title: 'Square', value: 'square' },
                ],
            },
        },
        {
            name: 'mainImage',
            title: 'Project Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'videoFile',
            title: 'Project Video',
            type: 'file',
            options: {
                accept: 'video/*'
            }
        },
        {
            name: 'year',
            title: 'Release Year',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Case Study Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Write the full details and story of the project here.'
        }
    ],
}