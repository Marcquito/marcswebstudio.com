const settings = {
  "name": "marcswebstudio",
  "state": {
    "frontity": {
      "url": "https://admin.marcswebstudio.com",
      "title": "Marc's Web Studio",
      "description": "Atlanta, GA's best web developer, user experience designer, and marketer."
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            [
              "About Me",
              "/about/"
            ],
            [
              "Portfolio",
              "/portfolio/"
            ],
            [
              "Blog",
              "/blog/"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://admin.marcswebstudio.com/",
          "homepage": "/home",
          "postsPage": "/blog",
          gfAuth: {
            key: "ck_95bd94a04b5156f0850509f7dbe0719cb54eaa58",
            secret: "cs_7023ff32e1b6b4752be5b83af2537a3cf0f4c328",
          },
          api: "https://admin.marcswebstudio.com/wp-json/",
          postTypes: [
            {
              type: "portfolio-content",
              endpoint: "portfolio-content",
              archive: "portfolio"
            }
          ],
          taxonomies: [
            {
              taxonomy: "portfolio-tag",
              endpoint: "portfolio-tag",
              postTypeEndpoint: "portfolio-tag",
              params: {
                per_page: 5,
                _embed: true,
              },
            },
            {
              taxonomy: "portfolio-category",
              endpoint: "portfolio-category",
              postTypeEndpoint: "portfolio-category",
              params: {
                per_page: 5,
                _embed: true,
              }
            }
          ]
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-74375607-1",
        },
      },
    },
    "@aamodtgroup/frontity-gravity-forms",
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
