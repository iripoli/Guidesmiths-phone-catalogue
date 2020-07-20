## INSTRUCTIONS TO START WORKING WITH DOCKER

1. Clone the project to your local machine from [https://github.com/iripoli/Guidesmiths-phone-catalogue.git](https://github.com/iripoli/Guidesmiths-phone-catalogue.git)
2. In the proyect directory use the console to build the docker image on your local using `docker build -t phone-catalogue-image .`
3. Once it finishes building the image you want to run the image as a container using `docker run --rm -it -p 3000:3000 phone-catalogue-image`
4. The proyect will start running in the container
5. To see the app in a browser you'll have to do different things if you're using Windows or macOS.
6. On macOS you should go to [http://localhost:3000](http://localhost:3000)
7. On Windows you have to open a new BASH terminal and check the ip where docker is connected with `docker-machine ip default`
8. Once you have the ip, you can now got to browser to http://<your ip>:3000

## INSTRUCTIONS TO START WORKING WITHOUT DOCKER

1. Clone the project to your local machine from [https://github.com/iripoli/Guidesmiths-phone-catalogue.git](https://github.com/iripoli/Guidesmiths-phone-catalogue.git)
2. In the proyect directory use the console to install all the dependencies with `npm install`
3. Once all the dependecies have been installed start the app using `npm start`
4. The proyect will start running on the port:3000
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Remember to first initialize de phone catalogue API, you can find it's repo here [https://github.com/iripoli/guidesmiths-catalogue-api]
- Also check that port 3000 is free before starting
