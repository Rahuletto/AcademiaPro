![alt text](/public/images/og.png)

# ClassPro
## Better way to manage your academics.
View, predict, and strategize your success.

---

> [!WARNING]
> This is the v3 branch for ClassPro
> 
> This branch is an architectural change moving from CSR to PPR (Partial Prerendering) and SSR (Server side rendering) techniques to make it faster, vigiliant and reliable.
>
> We had to
> - Rewrite entire frontend codebase
> - Rewrite backend to Golang with fiber
> - Change architectures and logics
> - Change how we display data
> - Using alot of portals to display
>
> This results in
> - `Best Performance`: We don't cache your data anymore, Everything's loaded and updated parallel with `goroutines`
> - `Server sided madness`: Nearly everything is rendered on server sided and caches the components, resulting in faster loading speeds
> - `Reduced junk`: We reduced nearly 60% of Nodes, so less components -> less bundle size -> faster speeds
> - `Custom Themes`: Rebuilt entire theme engine from scratch to support custom themes. Open a PR to add themes 😃
> - `Search algorithms`: We added fuzzy search to our links and added Faculties search
> - `Much accurate faculty results`: We had to scrape the names of staffs, now results in nearly ~93% accuracy in url results in course page
> - `Customizable timetable`: Added a way to toggle optional hours in timetable.
> - `Cleaner Calendar and Timetable`: It was filled with alot of Element Nodes, now its the same UI with 60% fewer Elements.
> - `Reimagined Attendance Predict`: Redrew everything from scratch to have an efficient, quicker and accurate prediction algorithm.
> - `Smart detection`: It identifies if session is invalid, ratelimits users and more


## Why Choose ClassPro?

- **Mobile-First Approach:** Optimized for mobile devices.
- **Fast and RAM Friendly:** Quick and efficient, won't slow down your device.
- **Open Source:** Transparent and community-driven.
- **Timetable Generation:** Creates a full timetable based on your class schedule.
- **Attendance Prediction:** Predicts the percent based on your expected leave days
- **Safe and Secure:** Built with privacy and security in mind.
- **No Bloat:** Streamlined and efficient, with no unnecessary bloatware.

### The Idea Behind ClassPro

This project was intended to show the timetable and attendance. but it grew and scaled to a full-on replacement to SRM Academia. We made sure to use the web-standards and the best-in-class approaches to make sure our service is `fast`, `easy-to-use` and `easy on eyes`.


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
[![All Contributors](https://img.shields.io/github/all-contributors/Rahuletto/ClassPro?color=ee8449&style=flat-square)](#contributors)

---

## [License](https://creativecommons.org/licenses/by-nc-nd/4.0/)

### You are free to:

- **Share:** Copy and redistribute the material in any medium or format.

### Under the following terms:

- **Attribution:** You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **NonCommercial:** You may not use the material for commercial purposes.
- **NoDerivatives:** If you remix, transform, or build upon the material, you may not distribute the modified material.
