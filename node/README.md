# MRU-UI

UI for todo list

![alt text](https://github.com/bmanth60/MagicalRainbowUnicorn/blob/master/sample/mrui-ui.png?raw=true, "screenshot")

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
make run args="make testv"
```

If you see `PASS` then everything is fine.

### Developing

```
make run opts="-p 8000:3000" args="make serve"
```

Compiles and serves the application at port 3000. Changes in code will immediately trigger a recompile and display.

```
make run args="make testx"
```

You run this command after making a code change. This runs the development toolchain and the tests.

### Testing
```
make run args="make test"
```

Runs the tests

```
make run args="make testx"
```

Runs development toolchain and then the tests

```
make run args="make cover"
```

Run coverage report and compile into html in the reports directory.

### Node

```
make run args="make compile"
```

Compile the app.

```
make run args="make dep"
```

Sync packages from the yarn lock dependency file.

```
make run args="make depinfo"
```

Show information about the status of the dependencies.

```
make run args="make check"
```

Run the automated formatter, `prettier`, and the linter.

### Clean up

```
make clean
```

Remove all artifacts created from the project. Does not remove production images.

### Release

TODO: Needs instructions here to build a release
