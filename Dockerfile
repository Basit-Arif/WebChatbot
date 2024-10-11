# Use the official Python 3.12 image
FROM python:3.12-slim

# Create the working directory and set it
RUN mkdir -p /app
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . .

# Set environment variables
ENV FLASK_APP=app.py  
ENV FLASK_RUN_HOST=0.0.0.0 

# Specify the command to run your application
CMD ["flask", "run", "--port=5002"]  # Ensure to use the correct port
