FROM python:3.11-slim

# Install system dependencies
USER root
RUN apt-get update && \
    apt-get install -y gcc g++ openjdk-11-jdk build-essential

# Set up your working directory and other setup steps
WORKDIR /app
COPY . /app

# Install Python dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Run migrations and collect static files
RUN python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py collectstatic --noinput

# Define the command to run your application
CMD ["gunicorn", "VCube_Data_API.wsgi:application", "--bind", "0.0.0.0:8000"]
