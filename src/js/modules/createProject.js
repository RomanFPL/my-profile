export default class CreateProject {
    constructor(parent, propObj){
        this.parent = document.querySelector(parent);
        this.propObj = propObj;
    }

    render (){
        const newProject = document.createElement('div');
        newProject.classList.add("wrap-prjects");
        newProject.innerHTML = `
               <div class="description">
                    <h3>${this.propObj.name}</h3>
                    <h4>Description</h4>
                    <p>${this.propObj.descMain}</p>
                    ${this.propObj.addFields && this.propObj.addFields.map( field => `<h3>${field.name}</h3><p>${field.desc}</p>`).join("")}
                    <p><span>You can see code example at this <a href=${this.propObj.gitLink} target="_blank" rel="noopener noreferrer">git repo</a></span></p>
                </div>
                <div class="presentation">
                    <div class="img-project">
                        <img src=${this.propObj.imgPath}  alt="">
                        <div class="border-around"></div>
                    </div>
                    <a  class="go-to" href=${this.propObj.projectLocation}><img src="./assets/icons/arrow.svg"  alt="arrow"></a>  
                </div>`
        console.log(this.propObj)
        this.parent.append(newProject);
    }
}