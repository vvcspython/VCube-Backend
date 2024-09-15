FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && \
    apt-get install -y gcc g++ openjdk-11-jdk build-essential

# Set up your working directory and other setup steps
WORKDIR /app
COPY . /app

# Install Python dependencies
RUN pip install -r requirements.txt

# Add an entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Define the command to run your application
CMD ["/entrypoint.sh"]
