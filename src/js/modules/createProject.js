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
                    <h3>Example 1</h3>
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi animi magni totam aspernatur veniam voluptatibus corporis at sequi. Eius sequi quas id quasi, eligendi possimus alias veritatis.
                    </p>
                </div>
                <div class="presentation">
                    <div class="img-project">
                        <img src="./assets/img/no-photo.jpeg"  alt="">
                        <div class="border-around"></div>
                    </div>
                    <a  class="go-to" href="#"><img src="./assets/icons/arrow.svg"  alt="arrow"></a>  
                </div>`
        console.log(this.propObj)
        this.parent.append(newProject);
    }
}