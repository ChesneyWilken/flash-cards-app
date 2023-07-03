# Live Site - Flashcards App

[https://react-flash-cards-app.netlify.app/](https://react-flash-cards-app.netlify.app/)

## Purpose
To practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over.

## To Run

Run `npm start` in the project root and the app will be available on port 3000.

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/topics/new` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/quizzes/new` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

## Note
This app app doesn't have persisted state set up. This is something I will set up in the future.
