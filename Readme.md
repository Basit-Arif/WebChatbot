# Web Chat Bot

## Overview
The **Web Chat Bot** is a user-friendly application created with **Flask**. It is designed to provide information about my professional portfolio through engaging conversations. The chatbot uses **Retrieval-Augmented Generation (RAG)** techniques to give accurate and relevant answers to user questions.

## Key Features
### 1. Customized Responses
The chatbot uses data from my portfolio, enriched with extra details and content I've created. This helps it give specific answers to users' questions, making interactions more informative and enjoyable.

### 2. Vector Database Integration
To find relevant information quickly, the chatbot uses **Astra DB**, a powerful vector database. This technology enables fast searches for the right answers, ensuring users receive accurate information without delay.

### 3. User-Friendly Interface
The application has a clean and simple design, built with **HTML, CSS, and JavaScript**. The user interface is easy to navigate, providing a smooth experience for anyone using the chatbot.

### 4. Containerization
The chatbot is packaged using **Docker**, which makes it easy to deploy and manage. Docker ensures the application runs consistently on different machines, improving reliability.

### 5. Cloud Deployment
The chatbot is hosted on **AWS**, allowing it to handle many users at once without slowing down. To keep everything secure, the deployment requires a **certificate (Cert)**, which protects user data and interactions.

## Technologies Used
- **Backend Framework:** Flask
- **Frontend Technologies:** HTML, CSS, JavaScript
- **Database Technology:** Astra DB (Vector Database)
- **Containerization Tool:** Docker
- **Cloud Platform:** AWS (with necessary certification)

## Setup Instructions
Follow these steps to set up the Web Chat Bot on your local machine:

### 1. Clone the Repository
Clone the repository from GitHub using the following command:

```bash
git clone https://github.com/Basit-Arif/lang-chain-/tree/main 
```

## 2. Navigate to the Project Directory
Change your directory to the project folder:
```
cd lang-chain-

```
## 3. Install Required Packages
Ensure you have Python and pip installed, then install the necessary packages by running:

```
pip install -r requirements.txt
```

## 4. Set Up Your Portfolio Data
To provide the chatbot with information from your portfolio, create a text file named portfolio_data.txt in the project directory. Add the relevant details and structure the data to suit your needs.

## Example of portfolio_data.txt:

### Portfolio of Abdul Basit

## Experience
- Developed multiple LLM applications using LangChain.
- Created an end-to-end AI project pipeline.

## Skills
- Flask, HTML, CSS, JavaScript
- Astra DB, Docker, AWS

## Projects
- Web Chat Bot
- AI-powered Document Reader

## 5. Run the Application
Start the Flask application with the following command:
```
flask run
```
The chatbot should now be running locally at http://127.0.0.1:5000.


## Conclusion

The Web Chat Bot showcases my skills in developing user-friendly applications and utilizing modern technology to create smart solutions. By leveraging techniques such as Retrieval-Augmented Generation and integrating a vector database, I aim to provide a seamless user experience. This project demonstrates my commitment to innovation and my ability to provide useful information in an engaging manner.

Feel free to explore the code, and I welcome any questions or feedback you may have!


