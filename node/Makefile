# Makefile variables
PROJECT_NAME=sample-app
TAG="bmanth60/${PROJECT_NAME}"
DOCKERFILE_URL="https://raw.githubusercontent.com/excelWithBusiness/node-build/0.0.4/Dockerfile"

# Run on docker
RUN = docker-compose run ${OPTS} --name ${PROJECT_NAME}_$(shell od -An -N1 -i /dev/random | tr -dc '0-9') --rm ${PROJECT_NAME}

#
## Basic commands with docker
all: setup
# Setup the project
setup:
	docker-compose build
	${RUN} make compile
reset: clean
	docker-compose down -v --rmi all

# Run command defined by ARGS variable
run:
	${RUN} ${ARGS}

#
## node
compile: clean dep
	npm run prebuild
	npm run build

# dep
dep:
	yarn
depinfo:
	yarn check --integrity
	yarn outdated || true

# testing
test: testv

testv:
	npm run test
	
testx: check depinfo testv

# special tests: cover
cover: testv

# linting
check:
	npm run lint
	npm run prettify "{app,__{tests,mocks}__}/**/*.js"

# serving
serve:
	if [ "${NODE_ENV}" = "production" ]; then npm run start:prod; else npm run start; fi

clean:
	npm run clean:all
