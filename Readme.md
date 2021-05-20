# SHAPE CALCULATOR

## Description

This is a dockerzied Symfony-based project developed for Horus Music that allows the user to calculate the surface area of a triangle and the diameter of a circle.

It is composed of two containers:

- `nginx`, the webserver.
- `php`, the PHP-FPM container with PHP version 7.4.

## Installation

1. Clone this rep.

2. Set the HTTP_PORT for nginx in the .env file at the project root.

3. Run `docker-compose up`

4. Navigate to localhost:{HTTP_PORT} in your browser.
