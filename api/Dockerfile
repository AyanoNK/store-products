FROM  python:3.11.3-alpine3.16

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /api

COPY . .

RUN pip install -r requirements.txt

# copy from the current directory of the Dockerfile to /api in the image


EXPOSE 3000

