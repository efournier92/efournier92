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
A personal website, built primarily to enable easy sharing of notes written in [Markdown](https://www.markdownguide.org/getting-started). Features include a [Landing Page](#landing-page), [About Page](#about), [Projects Feed](#projects), and a portal to upload and read [Notes](#notes). Projects can be created and edited by admin users, as can notes. All [Note](#notes) and [Project](#projects) data is publically readable to unauthenticated users. All notes are sortable by user-configured tags, and sharable via URL, with query params masquerading as routes.

## Demo
[efournier92](https://www.efournier92.com)

## Development Philosophy
I built this to serve as my own personal website, with the express intent of using it to share [Notes](#notes). Whenever I complete a project, I tend to document it for myself in a [Markdown](https://www.markdownguide.org/getting-started) file. I've amassed a trove of such files over several years, which I've now posted to [efournier92.com](https://efournier92.com/) for easy sharing. This marks the third application I've built using Angular in conjuction with Firebase, and I sought to design it to be as streamlined as possible, while adhering to the framework's best practices. I used [Angular Material](https://material.angular.io/) to develop the look and feel of the site. All components render nicely on mobile, tablet, and desktop. I leverage the [ngx-markdown](https://github.com/jfcere/ngx-markdown) library to render uploaded markdown files, persisted with [Firebase Storage](https://firebase.google.com/products/storage), as `html` in the [Notes Component](https://efournier92.com/notes). I'll continue to add features and content to the site as I create more projects and accumulate more [Markdown](https://www.markdownguide.org/getting-started).

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
![Landing Page](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/LandingPage_Dark.png)

### About Page
![About](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/AboutPage_Dark.png)

### Projects

#### View Projects
![View Projects](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/Projects_View_Dark.png)

#### Edit Project
![Edit Project](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/Projects_Edit_Dark.png)

### Notes

#### View Notes
![View Notes](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/Notes_View_Dark.png)

#### Upload New Note
![Upload Note](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/Notes_Upload_Dark.png)

#### Edit Existing Note
![Edit Existing Note](https://raw.githubusercontent.com/efournier92/efournier92/master/src/assets/img/screenshots/Notes_Edit_Dark.png)

## Features To Do
- [ ] Landing Page
  - [X] Typing animation
- [ ] Projects
  - [X] View Project Styling
- [ ] Notes
  - [X] Change from Docs to Notes Paradigm
  - [ ] Upload All Notes
  - [ ] Hidden note feature
  - [ ] Hunt Bugs
- [X] Auth
  - [X] Integrate admin authentication
- [ ] Tags Admin
