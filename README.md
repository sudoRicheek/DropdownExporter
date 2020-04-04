# DropdownExporter

A small and lightweight **Jupyter Extension** for exporting the **.ipynb** file to  PDF, HTML, Markdown, LaTeX or Python script in a single-click.

## How to set up and install ?

* If you don't have **nbextensions** installed, get it using **pip**
  ```
  pip install jupyter_contrib_nbextensions
  ```

* Now you'll need the location where the package : **jupyter_contrib_nbextensions** was just installed. You can do that using **pip**     as well :
  ```
  pip show jupyter_contrib_nbextensions
  ```
  We will need the path of the package from the description just displayed.

* Now move into, **/The-Path-Displayed/jupyter_contrib_nbextensions/nbextensions/**

* Now **clone/download this repo, and extract it**

* Then, copy the folder **/DropdownExporter-master/DropdownExporter** from downloaded repo, and paste it inside :

  **/The-Path-Displayed/jupyter_contrib_nbextensions/nbextensions/**

* Now run the command :
  ```
  jupyter contrib nbextension install
  ```

* Now, start your jupyter notebook and enable the extension **DropdownExporter** from the **Nbextensions** tab. Well, now you have         successfully installed the Extension !

## Usage

After the extension is installed you will probably get to see the following icons in your notebook toolbar. The icons are pretty much self-explanatory in themselves and will display their job when you hover over them. Other than that, their actions are also depicted here, in the image down below :)

## Extension Icon

![Extension Icon](https://github.com/sudoRicheek/DropdownExporter/blob/master/DropdownExporter/icon.PNG)

Now you are all set, and just a click away from the file format in which you want to export your awesome Notebook !

### Note : You'll need xelatex to export your notebook to beautiful PDFs and LaTeX typesets. Please follow this :

***https://nbconvert.readthedocs.io/en/latest/install.html#installing-tex***
