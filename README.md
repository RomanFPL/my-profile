# Started build for landing page
⚙️ Start  structure for webdev with gulp 4

comand "gulp" starts creation of folder dist.


to copy this stucture write → git clone https://github.com/RomanFPL/webdev-landing-build.git

Structure is 

───src

    ├───assets
    
    │   ├───css
    
    │   ├───font
    
    │   ├───icons
    
    │   ├───img
    
    │   └───sass
    
    └───js
    
    └───modules
      
 All content of assets is moved to dist folder that has the same structure as src folder
 
 Webpack is used to create script.js that is stored in dist folder after modifing by webpack.
 Sass|scss is compiled in style.min.css and then stored in src/css and dist/css.
 You should write html without using pug. This is native configuration for html.
 
 BrowserSynk is used in configuration with tunel. That means that you can open you curent project by url.

