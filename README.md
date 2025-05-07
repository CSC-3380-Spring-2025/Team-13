# [Impressions Audio] : [Team-13]
# Members
Project Manager: [Nene Fall] ([nfall3])\
Communications Lead: [Bryce Morris] ([thebrycemorris])\
Git Master: [Kevin Ray] ([punnpunn11])\
Design Lead: [Taya Dickens] ([t-soleil])\

# About Our Website
Our project, Impressions Audio, is a music streaming website that combines personalized music discovery with a social media presence. Users can register and log in securely through an authentication system with password hashing. Once a user is logged in, they can continue to explore music content through YouTube for lyric and music video playback. Users can also post to the Feed page about a concert they've previously attended, and use Ticketmaster on the Concerts Page for purchasing and discovering upcoming concerts and events. Our platform includes a variety of interactive features created to enhance the user's experience. Some of the features include a:

1. Search Bar: For watching music videos and searching for your favorite songs and artists.
2. Feed Page: For users to post their concert experience through a descriptive post and pictures/videos, create comment posts, and interact with other users by liking their posts.
3. Survey Page: Users are able to complete a survey that is based on their clothing choices or their current mood. After completing the survey, the website's system will generate different song recommendations based on their survey choices.
4. Top Songs Page: To learn about new music on a page that changes songs daily that have been recommended randomly from users posts to the feed.
   
Impressions Audio aims to deliver more than just streaming services; it offers a community-driven music experience where users can connect, share, and discover new music in a new, interactive way.

# Platforms we've tested the website on
- MacOS and iOS (Safari)
- Windows (Google Chrome and Microsoft Edge)

# Important Links
Kanban Board: https://github.com/orgs/CSC-3380-Spring-2025/projects/39 \
Designs: https://www.figma.com/design/wEQqvldOeGC0xVJ6ok2ULm/Impressions-Audio?node-id=50-3&p=f 
https://www.figma.com/board/hkUlrGxllt1bFIr7P9la2K/Music-Business-Website-in-Black-White-Modern-Luxe-Style?node-id=0-90&t=UM9fXEbIhKlDjRGj-0 
Styles Guide(s): https://docs.google.com/document/d/11XM-QwGBdzvSTMF3mpKUcOlpY0VMsjepQ72d8YCSxfE/edit?usp=sharing

# How to run dev and test environment

# Dependencies we installed and their versions
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.126",
    "@types/react-dom": "^19.0.4",
    "axios": "^1.9.0",
    "firebase": "^11.6.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.5.2",
    "react-scripts": "^5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"

## Commands
1. If the repository has not yet been cloned, run this command in terminal:
git clone https://github.com/CSC-3380-Spring-2025/Team-13.git

or copy the url and clone it manually in VS Code:
Clone Git Repository, paste url
Create a new folder, set it as the repository destination, and click open

2. After cloning, change directories into my-app:
cd  my-app
3. Once this is done, install the dependencies with npm using this command:
npm install
4. Once the dependencies have been installed, launch the website with:
npm start
