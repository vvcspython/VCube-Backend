#!/bin/sh

# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Collect static files
python manage.py collectstatic --noinput

# Start the server
exec gunicorn VCube_Data_API.wsgi:application --bind 0.0.0.0:8000
