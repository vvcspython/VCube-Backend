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

# Set working directory
WORKDIR /code

# Copy the entire application code
COPY . /code

# Change ownership of the /code directory to the non-root user
RUN chown -R myuser:myuser /code

# Switch to non-root user
USER myuser

# Create a virtual environment and install Python dependencies
RUN python -m venv /code/venv && \
    /code/venv/bin/pip install --upgrade pip && \
    /code/venv/bin/pip install -r /code/requirements.txt

# Ensure permissions are correct for the application code
RUN chmod -R u+rwX /code

# Run migrations and start the application
CMD ["/bin/sh", "-c", "/code/venv/bin/python manage.py makemigrations && /code/venv/bin/python manage.py migrate && /code/venv/bin/gunicorn --bind 0.0.0.0:8000 VCube_Data_API.wsgi:application"]
