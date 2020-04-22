```
  _____                              ___           _     _               
  \_   \_ __ ___   __ _  __ _  ___  / _ \_ __ __ _| |__ | |__   ___ _ __ 
   / /\/ '_ ` _ \ / _` |/ _` |/ _ \/ /_\/ '__/ _` | '_ \| '_ \ / _ \ '__|
/\/ /_ | | | | | | (_| | (_| |  __/ /_\\| | | (_| | |_) | |_) |  __/ |   
\____/ |_| |_| |_|\__,_|\__, |\___\____/|_|  \__,_|_.__/|_.__/ \___|_|   
                        |___/                                            
```

# Installation of Node.js on Linux
Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. 
Node.js can be installed in multiple ways on your Ubuntu Linux machine. You can use Ubuntu’s official repository to install Node.js or another way to use NodeSource repository. 
Installation via NodeSource repository will allow you to choose latest version of Node.js.

## Installing Node On Ubuntu 18.04 and 16.04: 
There are two methods Ubuntu official repository and NodeSouce repository to install Node.js on Ubuntu.

## Install Node.js using Ubuntu official repository: 
Node.js is available in Ubuntu’s repository and you can easily install it using a few commands. 
Follow the steps below to install Node.js on your Ubuntu operating system.

### Step 1: To install node.js use the following command:
```
sudo apt install nodejs
```

### Step 2: Once installed, verify it by checking the installed version using the following command:
```
node -v
```
or 
```
node –version
```

This should display the version you installed like: 
```
v10.17.0
```

## Note: It is recommended to install Node Package Manager(NPM) with Node.js. 
NPM is an open source library of Node.js packages.

### To install NPM, use the following commands:
```
sudo apt install npm
````
Node and NPM will be successfully installed on your Ubuntu machine.

## Install Node.js using NodeSouce repository: 
The latest version of Node.js can be installed from NodeSource repository. 
Follow the steps below to install the Node.js on your Ubuntu.

### Step 1: Update and upgrade the package manager:
```
sudo apt-get update
sudo apt-get upgrade
```

## Step 2: Install Python software libraries using the following command:
```
sudo apt-get install python-software-properties
```

### Step 3: Add Node.js PPA to the system.
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash –
```
--Note: Here, we are installing node.js version 10, if you want to install version 11, you can replace setup_10.x with setup_11.x.

### Step 4: To Install Node.js and NPM to your Ubuntu machine, use the command given below:
```
sudo apt-get install nodejs
```

Finally, you have successfully installed Node.js and NPM on your Ubuntu machine.

# Using ImageGrabber

### Step 1: Clone the repository.
```
sudo git clone https://github.com/PEMS-Motors/ImageGrabber.git
```

### Step 2: Run NPM.
```
cd ImageGrabber
sudo npm update
```

### Step 3: Add urls to index.js
```
images =
[
    "https://www.pemsmotors.com/wp-content/uploads/Pems-Catalog-Button.jpg",
    "https://www.pemsmotors.com/wp-content/uploads/Vacuum-Motor-1024x791.png",
    "https://www.pemsmotors.com/wp-content/uploads/Helwig-Carbon-BPK-4-05.11.17.png"
]
```
You can add as many urls as you wish but it must be a full url to the image it self.

### Step 4: Run program.
```
sudo node index.js
```

## Step 5: Retrieve images

The program will make a folder called dist6 and will have all your images located there.
You will either need a client like winscp to connect to your vps to retrieve your images.