# Deploy NodeJS application to Digital Ocean using Github actions and Docker hub

### Run the project on local machine

`Without Docker`

- clone the repository
- cd `deploy-with-docker`
- npm install
- npm start

`With Docker` (make sure, you have installed docker on your machine)

- clone the repository
- cd `deploy-with-docker`
- docker build -t <image-name> .
- docker run -p 5000:5000 <image-name>

*PS*
```
If you want to use the github action workflow, then please add the necessary secrets in your repository settings and you must have

- Digital Ocean Account (you can use alternative service as well)
- Docker container registry source (For this, I have used docker hub registry)
```


*TODO*
I'll add the workflow for
- AWS Container Registry
- Google Cloud Container Registry
