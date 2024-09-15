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
WORKDIR /home/myuser/code

# Copy the entire application code
COPY --chown=myuser:myuser . /home/myuser/code

# Copy requirements and install Python dependencies in a virtual environment
RUN python -m venv /home/myuser/venv && \
    /home/myuser/venv/bin/pip install --upgrade pip && \
    /home/myuser/venv/bin/pip install -r /home/myuser/code/requirements.txt && \
    rm -rf /root/.cache/

# Expose the port the app runs on
EXPOSE 8000

# Create an entrypoint script to run Django management commands and start the server
COPY entrypoint.sh /home/myuser/
RUN chmod +x /home/myuser/entrypoint.sh

ENTRYPOINT ["/home/myuser/entrypoint.sh"]
