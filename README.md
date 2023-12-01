Overview:
SOULFIT is a dynamic online community dedicated to holistic well-being, bringing together individuals passioanate about fitness, mindfullness and self care. Our platform serves as a vibrant hub where diverse members, united by a shared commitment to overrall physical and mental health, come together to inspire, support, and celebrate one another's journey Through engaging forums, expert sessions and invigorating challenges, SOULFIT encourages a holistic approach to wellness, fostering a positive and inclusive space for personal growth. Join us on this transformative journey where minnd, body and spirit converge for a healthier, happier you. Elevate your well-being with SOULFIT!

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Azure Services](#azure-services)
- [Demo Screenshots](#demo-screenshots)
- [Demo Video](#demo-video)
- [Project URL](#project-url)
- [Contributing](#contributing)

## Features
- Programs registration: Secure user registration.
- Cash on Delivery: Provides a cash on delivery option for users.
- Programs Information: Display information about programs.
- AI Chatbot: User can have Q&A session with AI.

## Installation
1. Clone the repository:
    bash
    git clone: https://github.com/Vasanth0909/soulfit-azure-project-node-
    
2. Install dependencies:
    bash
    npm install
    
3. Set up the database:
    bash
    # If not already created, create the SQLite database
    touch database.db

    # Run database migrations
    npm run migrate
    
4. Start the application:
    bash
    npm start
    

## Usage
1. Visit http://localhost:3002 in your web browser.
2. Use the provided login and register features.
3. Navigate to the registration page and sign up for a new account by providing your details.
4. Explore a variety of meditation sessions, relaxation techniques, and mindfulness exercises available on the platform.
5. Find resources, articles, and guides to promote mental well-being and stress management.
6. Explore the fitness gears and use the cash on delivery option.

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- SQLite3

## Azure Services
The project leverages the following Azure services:
- Web App: Hosts the Node.js application.
- Virtual Networking: Manages network traffic and security.
- Virtual Networking Integration: Connects various resources within a virtual network.
- Resource Group: Organizes and manages Azure resources.
- Monitor Insights: Provides monitoring and analytics for the application.
- chat Bot: Integrates a chat bot for enhanced user interaction.

## Demo Screenshots
![Screenshot 1](/path/to/screenshot1.png)
![Screenshot 2](/path/to/screenshot2.png)

## Demo Video
[Watch Demo Video](https://www.youtube.com/watch?v=your-video-id)

## Project URL
[Live Project](https://your-project-url.com)

## Contributing
This project is a collaborative effort, and each team member has a specific role:

1. *Development (Vasantha Kumar ):*
   - I am  responsible for coding and implementing new features.
   - To contribute, follow these steps:
      1. Fork the project.
      2. Create your feature branch: git checkout -b feature/your-feature.
      3. Commit your changes: git commit -m 'Add some feature'.
      4. Push to the branch: git push origin feature/your-feature.
      5. Submit a pull request.

2. *Deployment (Anthony Daniel Akash J):*
   - The second team member is responsible for deploying the application on Azure services.
   - Ensure that the deployment is seamless and aligns with the project requirements.

3. *Documentation and Demo (Rahul R):*
   - The third team member is responsible for creating and updating the README file, including demo screenshots, video, and voiceover.
   - To contribute, follow these steps:
      1. Fork the project.
      2. Create your documentation branch: git checkout -b documentation/README.md.
      3. Commit your changes: git commit -m 'Update documentation'.
      4. Push to the branch: git push origin documentation/README.md.
      5. Submit a pull request.
