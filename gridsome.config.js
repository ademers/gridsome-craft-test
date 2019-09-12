// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'http://craft33.test/api',
        fieldName: 'craft',
        typeName: 'craft',

        headers: {
          Authorization: `Bearer ${process.env.CRAFT_API_TOKEN}`,
        },
      },
    },
  ],
}



