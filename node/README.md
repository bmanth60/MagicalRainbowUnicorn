# MRU-UI

UI for todo list

## Development

### Requirements
- Docker 1.12.3-rc1 or above
- Docker Composer 1.8.1 or above
- GNU Make

### Setup
Once you've cloned the repo run:

```
make
```

Sets up the Docker Compose development environment, setup the vendor directory, and compile the go app.

Then run:

```
make run ARGS="make testv"
```

If you see `PASS` then everything is fine.

### Developing

```
make run OPTS="-p 8000:3000" ARGS="make serve"
```

Compiles and serves the application at port 3000. Changes in code will immediately trigger a recompile and display.

```
make run ARGS="make testx"
```

You run this command after making a code change. This runs the development toolchain and the tests.

### Testing
```
make run ARGS="make test"
```

Runs the tests

```
make run ARGS="make testx"
```

Runs development toolchain and then the tests

```
make run ARGS="make cover"
```

Run coverage report and compile into html in the reports directory.

### Node

```
make run ARGS="make compile"
```

Compile the app.

```
make run ARGS="make dep"
```

Sync packages from the yarn lock dependency file.

```
make run ARGS="make depinfo"
```

Show information about the status of the dependencies.

```
make run ARGS="make check"
```

Run the automated formatter, `prettier`, and the linter.

### Clean up

```
make clean
```

Remove all artifacts created from the project. Does not remove production images.

### Release

TODO: Needs instructions here to build a release
