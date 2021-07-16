export default {
  widgets: [
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
                  buildHookId: '60f14205545845be493811f7',
                  title: 'Sanity Studio',
                  name: 'moellers-sanity-kitchen-sink-studio',
                  apiId: '5ddc197b-0fa5-479f-8ab3-6e9bdf21d8db'
                },
                {
                  buildHookId: '60f1420545ca2fd0fe2e31cd',
                  title: 'Blog Website',
                  name: 'moellers-sanity-kitchen-sink',
                  apiId: 'f712ad47-3654-47d3-91b9-54314914acd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hrmoller/moellers-sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://moellers-sanity-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
