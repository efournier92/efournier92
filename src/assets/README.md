# ![BalancedBias](https://raw.githubusercontent.com/efournier92/balancedbias/master/Web/Media/img/Logo/BalancedBias_Logo_Dark.png)

## Contents
- [Overview](#overview)
- [Demo](#demo)
- [Development Philosophy](#development-philosophy)
- [Stack](#stack)
- [Configure](#configure)
- [Build](#build)
- [Contribute](#contribute)
- [License](#license)
- [Features](#features)
- [Features To Do](#features-to-do)

## Overview
In these politically-polarizing times, having balanced diet of news to ingest is more important than ever. This app takes advantage of the fact that most news outlets host an RSS feed by leveraging that data to present it in a novel way. Seven media channels are displayed by default, ranked from most liberal to most conservative, oriented from left to right. The result provides insight into how different news outlets are covering the same story concurrently. All article titles and links are persisted to a [T-SQL](https://en.wikipedia.org/wiki/Transact-SQ://en.wikipedia.org/wiki/Transact-SQL) database, such that historical data is persisted. Further insight can be gained by tracking a news story over a period of time. This app is hosted on [GearHost](https://www.gearhost.com/), and aims to help balance the media consumption of users everywhere!

## Demo
[BalancedBias](http://balancedbias.gearhostpreview.com/)

## Development Philosophy
In addition to providing the high-level functionality described in [Overview](#overview), I also wanted to develop this application using a very specific stack. I currently work as a .NET developer on a large production [Web Forms](https://docs.microsoft.com/en-us/aspnet/web-forms/what-is-web-forms) application. Since much of this platform was built before I joined, there were numerous aspects I know how to use, yet had never built myself from scratch. In designing this application, rather than referencing online resources, I referenced the codebase of the project I work on professionally. Hence giving it a traditional [Web Forms](https://docs.microsoft.com/en-us/aspnet/web-forms/what-is-web-forms) look, which feels at least a decade behind anything I've developed previously. That said, this project gave me an excellent excuse to grow more familiar with [Web Forms](https://docs.microsoft.com/en-us/aspnet/web-forms/what-is-web-forms), and to practice building a .NET application from the ground up.

## Stack

### Server
- [ASP.NET 4.7](https://docs.microsoft.com/en-us/dotnet/framework/)
- [Web Forms](https://docs.microsoft.com/en-us/aspnet/web-forms/what-is-web-forms)
- [Transact-SQL](https://en.wikipedia.org/wiki/Transact-SQL)
- [Spring.NET](http://springframework.net/)
- [StructureMap](http://structuremap.github.io/)
- [Newtonsoft Json.NET](https://www.newtonsoft.com/json)

### Client
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)

## Configuration

### `/Web/BalancedBias/App_Config/_BASE/rssChannelsService.config`

#### _Add new feed elements, in the following format_
```xml
<add name="" url="" icon="" template="GenericArticleTemplate" />
```

## Build
1. Open in [Visual Studio 2012](https://visualstudio.microsoft.com/vs/older-downloads/)
2. Build the solution
3. Configure the application to be hosted under IIS

## Contribute
If you have feature suggestions, please contact me here or at efournier92@gmail.com. If you'd like to submit a pull request, please feel free to, and I'll review merge it at my earliest convenience!

## License
This project is provided under the [`MIT`](https://opensource.org/licenses/MIT) licence and I hereby grant rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software without limitation, provided the resulting software also carries the same open-source licensing statement.

## Features

### View News By Media Bias
![News Dashboard](https://raw.githubusercontent.com/efournier92/balancedbias/master/Web/Media/img/ScreenShots/BalancedBias_NewsDashboard.png)

### View History By Date
![Dates Screen](https://raw.githubusercontent.com/efournier92/balancedbias/master/Web/Media/img/ScreenShots/BalancedBias_DatesDropdown.png)

## Features To Do
- [X] Fix scroll centering on post-back
- [ ] Add caching
- [ ] Add user authentication
- [ ] Add session management
- [ ] Add user ability to define custom news feeds

