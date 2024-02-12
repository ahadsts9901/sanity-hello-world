export default {
    name: "author",
    type: "document",
    title: "Author",
    fields: [
        {
            name: "authorName",
            type: "string",
            title: "Author Name"
        },
        {
            name: "authorBio",
            type: "string",
            title: "Author Bio"
        },
        {
            title: 'Author image',
            name: 'authorImage',
            type: 'image',
            options: {
                hotspot: true
            },
        }
    ]
}