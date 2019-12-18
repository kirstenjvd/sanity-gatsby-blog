export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df9d35505e7212283a3f515',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-njw7dprf',
                  apiId: '9f190df7-c710-489f-9720-ec171af4f388'
                },
                {
                  buildHookId: '5df9d356e18523f9a6cc01d2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fs4e8vfo',
                  apiId: '6c982bb3-a2e7-471e-b983-265f56030544'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kirstenjvd/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fs4e8vfo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
