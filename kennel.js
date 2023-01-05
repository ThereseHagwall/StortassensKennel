'use strict';

const dogPortal = {
    dogs: [
        {
            name: `Plexus`,
            ras: `Blandras`,
            year: 18,
            picture: `plexus.png`,
        },
        {
            name: `Maya`,
            ras: `Tibetansk Spaniel`,
            year: 12,
        },
        {
            name: `Julle`,
            ras: `Tibetansk Spaniel`,
            year: 12,
        },
        {
            name: `Ceasar`,
            ras: `Blandras`,
            year: 16,
        },
        {
            name: `Ozzy`,
            ras: `Blandras`,
            year: 5,
        },

    ],
    addDog: function(name){
        
    },
    removeDog: function(name){

    },
    editDogName: function(oldName, newName){
        const fullNameArray = oldName;

        const dogsArrayLength = this.dogs.length;
        for (let i = 0; i < dogsArrayLength; i++){
            if (this.dogs[i].name === fullNameArray[0] && this.student[i].lastName === fullNameArray[1]){
            this.dogs[i].name = newName;
            return true;
        };
        
        };
        return {name: `Error! No dog found`};

    },
    getAllDogsNames: function(){
        const arr = [];
        const dogsLength = this.dogs.length;
        for(let i = 0; i < dogsLength; i++){
            arr.push(`${this.dogs[i].name}`);
        };
        return arr;
    },
    getDog: function(name){   
        const fullNameArray = name.split(` `);

        for (const dog of this.dogs){
            if (dog.name === fullNameArray[0]){
                return dog;
            };
        };
        return {name: `Error! No student found`};
    },
};

let pictures =[
    `plexus.png`,
    `maya.png`,
    `julle.png`,
    `ceasar.png`,
    `Ozzy.png`,
];

const alldogsNames= dogPortal.getAllDogsNames();

const dogButtonDiv = document.querySelector(`div.dog-buttons`);

for (let dogName of alldogsNames){
    const newButton = document.createElement(`button`);
    newButton.innerHTML = dogName;

    newButton.addEventListener(`click`, function(){
        const dogObjekt = dogPortal.getDog(this.textContent);
        const dogInfoDiv = document.querySelector(`div.dog-info-box`);
        dogInfoDiv.innerHTML = ``;
        const dogInfoList = document.createElement(`ul`);
        // const imgTag = document.querySelector(`img`);
        // for(let i = 0; i < pictures.length; i++){
        //     imgTag.setAttribute(pictures[i]);
        // }
        
        for (const property in dogObjekt){
            
            const dogInfoListItem = document.createElement(`li`);

            dogInfoListItem.innerHTML= (`${property}: ${dogObjekt[property]}`);
            dogInfoList.append(dogInfoListItem);
        };
        dogInfoDiv.append(dogInfoList);

        const dogEditButton = document.createElement(`button`);
        dogEditButton.innerHTML = `Redigera hund`;

        const dogInfoButtonsDiv = document.querySelector(`div.dog-info-buttons`);
    
        dogInfoButtonsDiv.innerHTML = ``;
        dogInfoButtonsDiv.append(dogEditButton);
        
        dogEditButton.addEventListener(`click`, function(){
            const dogInfoEditForm = document.querySelector(`.dog-info-edit-form`);
            dogInfoEditForm.classList.toggle(`hidden`); 

            document.querySelector(`form.dog-edit-form`).addEventListener(`submit`, function(){
                event.preventDefault();
            });
            const editNameInput = document.querySelector(`.edit-dog-name`);
            
            editNameInput.setAttribute(`value`, dogObjekt.name);
            
            const editSaveButton = document.querySelector(`.edit-save-button`);
            editSaveButton.addEventListener(`click`, function(){
                dogPortal.editDogName(`${dogObjekt.name}`, document.querySelector(`.edit-dog-name`).getAttribute(`value`));
                dogInfoEditForm.classList.add(`hidden`);  
            })
        })
    });
    dogButtonDiv.append(newButton);
};


