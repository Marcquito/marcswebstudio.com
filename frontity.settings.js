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
          "url": "https://wordpress-103378-1418869.cloudwaysapps.com/",
          "homepage": "/home",
          "postsPage": "/blog",
          gfAuth: {
            key: "ck_f4f2930bf10635ab0474eef9395d538faf4a29c6",
            secret: "cs_beda8b1ff0f1ae86cd19144269954164aba0d1ff",
          }
        }
      }
    },
    "@aamodtgroup/frontity-gravity-forms",
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
