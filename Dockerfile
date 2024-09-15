FROM debian:bookworm

# Install system dependencies
RUN apt-get update && \
    apt-get install -y gcc g++ openjdk-11-jdk build-essential

# Set up your working directory and other setup steps
WORKDIR /app
COPY . /app

# Install Python and dependencies
RUN apt-get install -y python3 python3-pip && \
    pip3 install --upgrade pip && \
    pip3 install -r requirements.txt

# Run migrations and collect static files
RUN python3 manage.py makemigrations && \
    python3 manage.py migrate && \
    python3 manage.py collectstatic --noinput

# Define the command to run your application
CMD ["gunicorn", "VCube_Data_API.wsgi:application", "--bind", "0.0.0.0:8000"]
