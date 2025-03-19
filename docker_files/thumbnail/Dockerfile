FROM python:3.10

# Install system dependencies
RUN apt-get update && apt-get install -y poppler-utils

WORKDIR /app

# Copy requirements and install Python packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app.py .

# Expose the port
EXPOSE 8787

# Run Gunicorn as the WSGI server
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8787", "app:app"]