FROM python:3.10-slim-buster

# Set non-interactive mode for apt-get
ARG DEBIAN_FRONTEND=noninteractive

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create a directory for the app
RUN mkdir -p /code
WORKDIR /code

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    cron \
    wkhtmltopdf \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt /tmp/requirements.txt
RUN pip install --upgrade pip && \
    pip install -r /tmp/requirements.txt && \
    rm -rf /root/.cache/

# Copy the entire application code
COPY . /code

# Make the release script executable
RUN chmod +x /code/release.sh

# Define the command to run your application
CMD ["sh", "/code/release.sh"]
