
# Crypto View Web App
## Live link: [https://cryptoview-us13.onrender.com](https://cryptoview-us13.onrender.com)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Demo of the Crypto View Web App](#demo-of-the-crypto-view-web-app)
3. [Key Features](#key-features)
4. [Important Note for Chrome Users](#important-note-for-chrome-users)
5. [Requirements & Specifications](#requirements--specifications)
6. [Development Workflow](#development-workflow)
   - [Branch Hierarchy](#branch-hierarchy)
   - [Git Strategy](#git-strategy)
7. [Tech Stack](#tech-stack)

## Project Overview
Cryptocurrencies are an integral part of today's financial landscape, necessitating real-time insights into the market. The Crypto View Web App aims to fulfill this need by providing users with comprehensive data and a range of features to navigate the cryptocurrency market effectively.

##  Demo of the Crypto View Web App 
![cryptoview-ezgif com-video-to-gif-converter](https://github.com/chingu-voyages/v47-tier2-team-15/assets/140349116/12a672ce-401b-4d9a-91e0-1c1bbbb27dda)

## Key Features
1. **Cryptocurrency Data:** Access real-time market data, including market cap, volume, price, and changes.
2. **Cryptocurrency Information:** Dive into detailed info for each cryptocurrency, including name, symbol, price, 24-hour changes, volume, supply, and market cap.
3. **Search:** Easily search for cryptocurrencies by name or symbol to quickly find the desired information.
4. **Portfolio:** View and manage your favorite cryptocurrencies in one place. Add favorites directly from the main crypto page or individual cryptocurrency details.
5. **News:** Stay informed with the latest cryptocurrency news and updates. Get insights into market trends, regulatory developments, and technology advancements.


## Important note for using app in Chrome and Chrome Incognito:
Chrome, by default, has begun to block the use of 3rd-party cookies. This app is deployed to a free host and utilizes 3rd-party cookies to keep track of users. If your browser does not receive 3rd-party cookies the login and profile features within the app will not work properly.

To ensure your Chrome browser will accept 3rd party cookies for the CrytpoTracker App:
- open Chrome settings and search for the word "cookies"
- click "third-party cookies"
- at the bottom of the page in the section "Allowed to use third-party cookies" click "Add"
- Enter the URL: https://cryptoview-us13.onrender.com
  
## Deployment

## Requirements & Specifications
- **Structure:** Focus on full-stack development, incorporating both frontend and backend components.
- **Styling:** Emphasize creativity in UI/UX design. Include a GitHub link in the footer and adhere to UI design principles for a polished look.
- **Functionality:** Develop landing page components, user-friendly search, detailed data display, summary metrics,  portfolio management, and news section.
- **Extras:** Option to save search criteria, supplementary metrics, and responsiveness for optimal viewing across various devices.

## Development Workflow
- **Branch Hierarchy:** Use a three-level hierarchy of branches for promoting changes.
- **Development Branch:** Reflects code for the next release, with all code undergoing testing and peer review.
- **Master Branch:** Updated only from the development branch Pull Requests and reflects the current production release seen by live users.

## Git Strategy
### Pull Requests & Merging
All Pull Requests and code merging will take place in the project's GitHub repo. To reduce merge conflicts, the destination branch should be pulled into the merging branch prior to opening a pull request. After testing changes locally, approve or comment on the PR on GitHub.
### Development Branch
Working branches will be merged into the development branch during weekly development. At least one team member other than the requester must review and approve a request before merging. After successful merge, delete the merged branch from the repository. Resolve any merge conflicts promptly.
### Master Branch
A PR to merge to the master should reflect the goals of the prior week's sprint and produce an updated MVP. All team members must approve a request for merging into the master branch.

## Tech Stack

- **Frontend:** 
  - React.js with Vite for fast development and optimized builds.
  - HTML for structuring the frontend components.
  - Tailwind CSS for rapid UI development with utility-first CSS.
- **Backend:**
  - Node.js: JavaScript runtime for server-side applications.
  - Express.js: Minimalist web framework for Node.js.
  - MongoDB: NoSQL database for flexible data storage.
  - Mongoose: MongoDB object modeling for Node.js.
  - Passport.js: Authentication middleware for Node.js.
    
- **APIs:**
  - **CoinLore API:** [https://www.coinlore.com/cryptocurrency-data-api](https://www.coinlore.com/cryptocurrency-data-api)for real-time cryptocurrency market data..
  - **NewsAPI:** [https://newsapi.org](https://newsapi.org) for fetching the latest cryptocurrency news.
  
  ## Developers
- **UI/UX Designer:** [Vruti Shah](https://www.linkedin.com/in/vruti-shah-29a393130/)
- **Frontend Developer:** [Ana Popović](https://www.linkedin.com/in/franecode/)
- **Backend Developers:**
  - [Kseniia Riabova](https://www.linkedin.com/in/kseniia-riabova-32712b29b/?originalSubdomain=es)
  - [Peifang Isabell Luo](https://www.linkedin.com/in/peifang-luo-dev/)
- **Product Owners:** [Zahra Motlagh](https://www.linkedin.com/in/zahra-motlagh/)
- **Agile Coach/Scrum Master:** [Christopher Maxwell](https://www.linkedin.com/in/christopher-maxwell-a59603240/)
- **Chingu Coach, Chingu Guide:** [Jim Medlock](https://www.linkedin.com/in/jdmedlock/)
