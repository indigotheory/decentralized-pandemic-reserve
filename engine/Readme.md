# READ.me 

## RUN JUPYTER SERVER FOR R(t) VALUE CALCULATION|PREDICTION

In its current form, this tutorial is meant to be executed with Jupyter notebook
5.0, using IPython 6.0 or newer on Python 3, the latest IPython version
compatible with Python 2 is IPython 5.x that may not have the exact same
behavior and all the features presented in this tutorial. 


You can find our installation instructions [for
IPython](http://ipython.org/install.html) and [Jupyter
notebook](http://jupyter.readthedocs.io/en/latest/install.html)

To get the tutorial, checkout the `ipython-in-depth` repo:

    git clone https://github.com/indigotheory/decentralized-pandemic-reserve.git

Or just [download branch COVIDathon] (https://github.com/indigotheory/decentralized-pandemic-reserve/tree/covidathon) and unzip
it.

At the command line, you can do this with (depending on whether your system uses
wget or curl):

    wget https://github.com/indigotheory/decentralized-pandemic-reserve/archive/covidathon.zip -O covidathon.zip
or

    curl -L https://github.com/indigotheory/decentralized-pandemic-reserve/archive/covidathon.zip -o covidathon.zip

And then:

    unzip covidathon.zip

Change directory inside the directory newly created:

    cd decentralized-pandemic-reserve-covidathon/engine
 

You can then start the IPython notebook server at a terminal with:

    jupyter notebook