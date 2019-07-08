# ![efournier92](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/logo/efournier92_Logo_Color.png)

## Contents
- [Overview](#overview)
- [Demo](#demo)
- [Development Philosophy](#development-philosophy)
- [Stack](#stack)
- [Configure](#configure)
- [Build](#build)
- [Test](#test)
- [Contribute](#contribute)
- [License](#license)
- [Features](#features)
- [Features To Do](#features-to-do)

## Overview
A personal website, built primarily to enable easy sharing of notes written in [Markdown](https://www.markdownguide.org/getting-started). Features include a Landing page, About page, Projects feed, and a portal to upload and read notes. Projects can be created and edited by admin users, as can notes. All Note and Project data is publically readable to unauthenticated users. All notes are sortable by user-configured tags, and sharable via URL, with query params masquerading as routes.

## Demo
[efournier92](https://www.efournier92.com)

## Development Philosophy
I built this to serve as my own personal website, with the express intent of using it to share notes. Whenever I complete a project, I tend to document it for myself in a [Markdown](https://www.markdownguide.org/getting-started) file. I've amassed a trove of such files over several years, which I've posted here for easy sharing. This marks the third application I've built using Angular and Firebase, and I sought to design it to be as streamlined as possible, while adhering to the framework's best practices. I used [Angular Material](https://material.angular.io/) to develop the look and feel of the site. All components render nicely on mobile, tablet, and desktop. I leverage the [ngx-markdown](https://github.com/jfcere/ngx-markdown) library to render uploaded markdown files, persisted with [Firebase Storage](https://firebase.google.com/products/storage), as `html` in the [Notes Component](https://efournier92.com/notes). I'll continue to add features and content to the site as I create more projects and accumulate more [Markdown](https://www.markdownguide.org/getting-started).

## Stack
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database/)
- [Firebase Hosting](https://firebase.google.com/products/hosting/)
- [Firebase Storage](https://firebase.google.com/products/storage)
- [Firebase Authentication](https://firebase.google.com/products/auth/)
- [SCSS](https://sass-lang.com)
- [Bootstrap](https://getbootstrap.com/)
- [RxJS](http://reactivex.io/)
- [ngx-markdown](http://reactivex.io/)
- [angular-webstorage-service](https://github.com/dscheerens/ngx-webstorage-service)

## Configure

### `app-configs.*.ts`

```javascript
export const FireConfig = {
  apiKey: "API_KEY",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
};
```

## Build

### Local
`ng serve`

### Production
`ng build --prod`

## Test
`ng test`

## Contribute
If you have feature suggestions, please contact me here or at efournier92@gmail.com. If you'd like to submit a pull request, please feel free to, and I'll review merge it at my earliest convenience!

## License
This project is provided under the [`MIT`](https://opensource.org/licenses/MIT) licence and I hereby grant rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software without limitation, provided the resulting software also carries the same open-source licensing statement.

## Features

### Landing Page
![Landing Page]()

### About Page
![About]()

### Projects

#### View Project
![View Project]()

#### Edit Project
![Edit Project]()

### Notes

#### View Notes
![View Notes]()

#### Upload Note
![Upload Note]()

#### Edit Existing Note
![Edit Existing Note]()

## Features To Do
- [ ] Landing Page
  - 
  - [X] Typing animation
- [ ] Projects
  - [X] View Project Styling
- [ ] Notes
  - [X] Change from Docs to Notes Paradigm
  - [ ] Upload All Notes
  - [ ] Hunt Bugs
- [X] Auth
  - [X] Integrate admin authentication

