[![Netlify Status](https://api.netlify.com/api/v1/badges/150d56fe-ff4a-40d4-96ef-be16c2594501/deploy-status)](https://app.netlify.com/sites/quirky-villani-0eccf5/deploys)![CI](https://github.com/rjkerrison/fewd/workflows/CI/badge.svg)

# FEWD

## What it is?

Is a **monorepo** with content for Front-end Web Development course for [General Assembly London][ga] 🇬🇧.

It is forked from [pataruco/fewd][fork].

It is divided:

- [Web ](./web/readme.md): [React][react] app hosted in [Netlify][netlify] with the custom domain [**https://fewd.rjkerrison.co.uk**][site]
- [Labs](./labs/readme.md): Labs & exercises for each lesson
- [Homeworks](./homeworks/readme.md): Exercises for students outside class

## How to install

- Clone this repo

  ```sh
  git clone git@github.com:rjkerrison/fewd.git
  ```

- Install dependencies

  ```sh
  yarn
  ```

## How to run locally

```sh
yarn workspace web start
```

## How to deploy

A [Github action][gh-actions] is set to deal with deployments to prod. To trigger a deployment

- Create a git release [tag][git-tag] with the following convention `R.<number>.<number>.<number>`

  ```sh
  git tag R.1.0
  ```

- Push tag to remote

  ```sh
  git push --tags
  ```

- Check the [CI/CD build][ci-build] is running

- Make a tea 🫖

- Check [site][site] live

- 🚀

[react]: https://reactjs.org/
[netlify]: https://www.netlify.com/
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.rjkerrison.co.uk/
[fork]: https://github.com/pataruco/fewd
[ci-build]: https://github.com/rjkerrison/fewd/actions?query=workflow%3ACI
