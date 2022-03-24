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
                  buildHookId: '623cf3dea49b1e0af6b97389',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-react-gatsby-studio',
                  apiId: '2ceb881f-dfe7-4c22-99af-1164cc8fd605'
                },
                {
                  buildHookId: '623cf3dec451c900b57d9f13',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-react-gatsby',
                  apiId: 'a628b3fb-3f5c-4f4b-9ed9-69bb9d0fa6bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vitustockholm/sanity-kitchen-sink-REACT-GATSBY',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-react-gatsby.netlify.app', category: 'apps'}
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
