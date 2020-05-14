# Athena

## Installation

1. Install [Python 3](https://www.python.org/downloads/).
1. Clone the repository using one of the following methods.
    - SSH: `git clone git@github.com:AshtrayShetty/Athena.git`
    - HTTPS: `git clone https://github.com/AshtrayShetty/Athena.git`
1. Install.
    ```
    cd Athena
    python3 -m venv env
    source env/bin/activate
    pip3 install -r requirements.txt
    deactivate
    cd ../react_athena
    npm i
    ```

## Usage

1. Run the backend on http://localhost:8000.
    ```
    source env/bin/activate
    python3 manage.py migrate
    python3 manage.py runserver 
    ```
1. Run the following commands in another terminal to start the frontend on http://192.168.1.10/.
    ```
    cd react_athena
    npm start
    ```
1. Shut down once you're done.
    1. Shut down the frontend.
        - macOS: `command+C`
        - Others: `Ctrl+C`
    1. Shut down the backend.
        1. Stop the server.
            - macOS: `command+C`
            - Others: `Ctrl+C`
        1. `deactivate`
