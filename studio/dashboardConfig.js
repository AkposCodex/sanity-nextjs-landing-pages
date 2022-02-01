export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f90ceae5010ea5e2fb7558',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-17pwqqzd',
                  apiId: 'a07291d1-ca45-4280-83e7-a245bb240d1e'
                },
                {
                  buildHookId: '61f90cea521d218fc201fe88',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-875c9cwq',
                  apiId: '9491abde-3c66-4dd9-a37d-e0064969c680'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AkposCodex/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-875c9cwq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
