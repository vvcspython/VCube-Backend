#!/bin/sh

# Apply database migrations
/code/venv/bin/python manage.py makemigrations
/code/venv/bin/python manage.py migrate

# Collect static files (optional, if you have static files)
# /code/venv/bin/python manage.py collectstatic --noinput

# Start Gunicorn server
exec /code/venv/bin/gunicorn --bind 0.0.0.0:8000 VCube_Data_API.wsgi:application
