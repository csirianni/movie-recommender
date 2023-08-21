# Movie Recommender

[![backend](https://github.com/csirianni/movie-recommender/actions/workflows/backend.yml/badge.svg)](https://github.com/csirianni/movie-recommender/actions/workflows/backend.yml)

## Overview

Movie Recommender is a web application that computes movie recommendations based on user input. The user provides three movie examples through an autocomplete text input component. The title, rating, and movie poster of the selected examples are displayed on the page. Then, the user clicks the Recommend button and receives recommendations according to content-based filtering of the [TMBD 5000 Movie Dataset](https://www.kaggle.com/tmdb/tmdb-movie-metadata?select=tmdb_5000_movies.csv). The default [similarity metric](https://en.wikipedia.org/wiki/Similarity_measure) is [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity), but other metrics are selectable in the backend.

## Design Choices

The project contains two major sections: `/frontend` and `/backend`. Each directory contains an additional `README.md` outlining design choices in more detail.

The project uses React with TypeScript in the frontend and Flask with Python in the backend.

## Instructions

It is necessarily to configure the `/frontend` and `/backend` folders initially. See the respective `README.md`s for more information.

In order to run the frontend, `cd` into `/frontend` and run

```console
npm start
```

In order to run the backend, `cd` into the `/frontend` and run

```console
python3 -m src
```
