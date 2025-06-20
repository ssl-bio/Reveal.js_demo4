# Animating content in Reveal.js using Emacs Org-mode

> **Important**
> 
> The CSS file used for the presentation was produced with Tailwind version 3.4.15 since this version allows to properly display Reveal.js [overview mode](https://revealjs.com/overview/). Newer versions of Tailwind (v4.x) display only the current slide while the others are shown as empty boxes. If Tailwind's new features are needed check a related [repository](https://github.com/ssl-bio/Reveal.js_demo3) on how to use a newer version of tailwind and how to adapt the source CSS file (`icustom.css`).


## Description

A sample [Reveal.js](https://revealjs.com/) presentation customized using [Tailwind CSS](https://tailwindcss.com/).

The presentation was written on Emacs org-mode and exported to HTML using [org-reveal](https://github.com/yjwen/org-reveal).

-   It is recommended to check the [Readme](https://github.com/yjwen/org-reveal/blob/master/Readme.org) file from the org-reveal package in order to modify this presentation.
-   For those not familiar with Reveal.js it is recommended to see the demo presentation (on the link above) to learn more about its capabilities.


## Live version

-   [[Here](https://ssl-bio.github.io/Reveal.js_demo4)]


### Build/tested with:

The presentation was made and tested using:

-   **Emacs**: *v.30.1*
    -   **org-reveal**: commit f55c851b
-   **Reveal.js**:
    -   Local *v. 5.2.1* (commit eb95b145)
    -   Remote *v 5.2.1*
-   **nodejs**: *v. 22.13.0*
-   **TailwindCSS**: *v. 3.4.15*


## Quick setup [local]


### Download reveal.js

The following code will clone/download reveal.js.

```sh
# Option 1 Download the zip file
# wget https://github.com/hakimel/reveal.js/archive/master.zip -O reveal_js.zip

# Option 2 - Clone the repository
git clone https://github.com/hakimel/reveal.js.git
```


### Emacs configuration

Make sure that the variable `org-reveal-root` points to the directory where Reveal.js was cloned.


### Installation of Tailwind CLI

The following commands will setup a virtual environment where node.js will be installed and used to install tailwind command line interface (CLI).

```bash
  # Anaconda is required
  # Create a new virtual environment to install node.js
  conda create --name reveal-js -y
  conda activate reveal-js
  conda install anaconda::nodejs -y

  # Change to the presentation folder
  # cd /path/to/reveal/presentation/folder

# Install tailwindcss (locally) and cre# ate config file
npm install -D tailwindcss@3.4.15
npx tailwindcss init
```


### Building the final CSS file

The code below was taken from the official [installation instructions](https://v3.tailwindcss.com/docs/installation). The `--watch` flag is necessary while making the presentation to update the final CSS file with the utilities and classes used.

```bash
conda activate reveal-js
npx tailwindcss -i ./personal/css/icustom.css -o ./personal/css/custom_tailwind.css --watch
```


### Modify the presentation file to run it locally

Once reveal.js has been downloaded, org-reveal configured and tailwind installed (and running), it is possible to modify the presentation file to run it locally by changing the following lines.

```emacs-lisp
# Comment or delete the url for the reveal.js CDN
##+REVEAL_ROOT: https://cdn.jsdelivr.net/npm/reveal.js@5.1.0

# Change the path to reveal.js themes
# Use absolute path
themesPath:'/absolute/path/to/reveal-files/reveal.js/dist/theme'
```

Modify the content of the presentation and export it using `C-c C-e R R`.


### Troubleshoot using third-party plugins with a CDN

For some reason when using a content delivery network (CDN) to access Reveal.js files (for example, `#+REVEAL_ROOT: [[https://cdn.jsdelivr.net/npm/reveal.js@5.2.1]]`) the exported file can not find and use some plugins namely, `highlight` and third-party plugins. To solve this issue, one has to comment out the above option, export the file (using a local version of Reveal.js) remove the comment and export again.
