# ✨📋 // My portfolio 
It is place where you can explore my projects and find my bio.


Tecnical part about methods.
Text modifier → Create text typing effect (Only for text nodes).


It obtaines next sequence of arguments:

elem  => Query selector to the text node of element to change.

words => Array of words to type.

scrolIfEnd => Bool | Switch on/off scroling if all words ware typed.

sectionToScroll => Query selector to section to scroll to.

typeTime = 100 

eraseTime = 100

startEraseTime = 1500


Menu Sticky → Simulate behavior of position sticky with JS.


Globe → It is js scrip for animating background. 


CreateProject → class that adds new projects. It contains only one method - render. 

Class constructor get next properties:

parent = Parent selector.

propObj = Object with next structure.

id: number

name: str

descMain: long str

imgPath, projectLocation, gitLink:  path with "..."

addFields: is optional, and get arr of obj with {name: str, desc}

