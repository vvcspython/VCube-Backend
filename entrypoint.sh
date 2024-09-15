#!/bin/sh

# Apply database migrations
/home/myuser/venv/bin/python manage.py makemigrations
/home/myuser/venv/bin/python manage.py migrate

# Collect static files (optional, if you have static files)
# /home/myuser/venv/bin/python manage.py collectstatic --noinput

# Start Gunicorn server
exec /home/myuser/venv/bin/gunicorn --bind 0.0.0.0:8000 VCube_Data_API.wsgi:application
