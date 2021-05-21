# SHAPE CALCULATOR

![horus1](https://user-images.githubusercontent.com/54608658/119044918-13f86180-b9bb-11eb-88d1-08f4d83466a0.jpg)

## Description

This is a dockerzied Symfony-based project developed for Horus Music that allows the user to calculate the surface area of a triangle and the diameter of a circle. The PHP dependencies are managed ith Composer and the JavaScript dependencies are managed with Yarn. 

It is composed of two containers:

- `nginx`, the webserver.
- `php`, the PHP-FPM container with PHP version 7.4.

## Installation

1. Clone this rep.

2. Navigate to the symfony directory.

3. Run the following commands to install dependencies and bundle assets:
```
composer install
yarn install
yarn encore production
```
4. Navigate back to the root directory.

6. Run the following command to compose the project:
```
docker-compose up
```

6. Navigate to localhost:8080 in your browser.
