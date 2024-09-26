# Dedún: A Platform for Meaningful Connections

Welcome to the **Dedún** project! This platform aims to create meaningful connections between people in various aspects of life, from interpersonal relationships to professional contacts, personal improvement, and education.

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Team](#team)
- [License](#license)

## Overview
**Dedún** is a web-based platform designed to help users establish connections in five major domains:
1. Romantic or sexual relationships
2. Professional networking
3. Employer-employee connections
4. Personal improvement with coaches, psychologists, or spiritual guides
5. Learning relationships between students and teachers

The platform uses psychometric testing to ensure users find meaningful and compatible connections based on their unique traits and preferences.

## Key Features
- **User Profiles**: Create detailed user profiles tailored to the specific relationship type (romantic, professional, etc.).
- **Psychometric Testing**: Match users based on various psychometric tests tailored for different types of connections, such as Big Five for learning relationships or the 16PF test for employer-employee matchmaking.
- **Secure Data Storage**: All user data and test results are securely stored and backed up.
- **Multiple Relationship Types**: Supports finding connections in personal, professional, educational, and spiritual contexts.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Django
- **Database**: PostgreSQL
- **Containerization**: Docker
- **Project Management**: Jira, Google Drive

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/AlejandroUN/Dedun.git
    cd Dedun
    ```

2. Set up the backend:
    ```bash
    # Create a virtual environment
    python3 -m venv env
    source env/bin/activate
    
    # Install dependencies
    pip install -r requirements.txt
    
    # Run database migrations
    python manage.py migrate
    
    # Start the Django server
    python manage.py runserver
    ```

3. Set up the frontend:
    ```bash
    cd frontend
    npm install
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Usage
- Users can sign up, log in, and create a profile based on their desired relationship type.
- Psychometric tests are used to match users with others in the same domain.
- Admins can manage user data and platform operations through a secure backend interface.

