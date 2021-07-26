const settings = {
  "name": "marcswebstudio",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
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
            key: "ck_557ec37925c30877b22adf57991df3fe2c374ee2",
            secret: "cs_ce6a2c78bedad39d19ec24e1cc6bb92ee7370685",
          },
          api: "https://admin.marcswebstudio.com/wp-json",
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
    "@aamodtgroup/frontity-gravity-forms",
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
