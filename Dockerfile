FROM python:3.9

# Install Java
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk

# Set JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64
ENV PATH $PATH:$JAVA_HOME/bin

# Install C and C++ compilers
RUN apt-get install -y gcc g++ make

# Install Node.js and npm (for JavaScript)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Create a non-root user
RUN useradd -m myuser

# Set the non-root user
USER myuser

# Set working directory
WORKDIR /code

# Copy the entire application code
COPY --chown=myuser:myuser . /code

# Copy requirements and install Python dependencies in a virtual environment
RUN python -m venv /code/venv && \
    /code/venv/bin/pip install --upgrade pip && \
    /code/venv/bin/pip install -r /code/requirements.txt

# Expose the port the app runs on
EXPOSE 8000

# Create an entrypoint script to run Django management commands and start the server
COPY entrypoint.sh /code/
RUN chmod +x /code/entrypoint.sh

ENTRYPOINT ["/code/entrypoint.sh"]
