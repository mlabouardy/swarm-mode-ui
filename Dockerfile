FROM python:
MAINTAINER mlabouardy <mohamed@labouardy.com>

COPY . /app

WORKDIR /app

RUN pip install -r requirements

EXPOSE 5000

CMD python app.py
