FROM python:3.9

# Install Java
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk

# Set JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64
ENV PATH $PATH:$JAVA_HOME/bin

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
