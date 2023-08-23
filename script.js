const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener('click', function () {
    addnote();
});

const savenote = () => {
    const notes = document.querySelectorAll('.card textarea');
    const data = Array.from(notes).map(card => card.value);
    console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
};

const addnote = (text = "") => {
    const maincard = document.querySelector('.maincard');

    const card = document.createElement("div");
    card.classList.add("card");

    const htmlData = `
        <div class="card-head">
            <i class="fas save fa-save"></i>
            <i class="fas trash fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;

    card.insertAdjacentHTML('afterbegin', htmlData);
    console.log(card);

    const trash = card.querySelector(".card-head .trash");
    trash.addEventListener('click', () => {
        card.remove();
        console.log("remove");
        savenote();
    });

    const save = card.querySelector(".card-head .save");
    save.addEventListener('click', () => {
        savenote();
    });

    maincard.appendChild(card);
};

(function () {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (lsNotes === null) {
        // addnote();
    } else {
        lsNotes.forEach((lsNote) => {
            addnote(lsNote);
        });
    }
})();


    // const maincard = document.getElementsByClassName("maincard");
    // const card = document.createElement("div");
    // card.classList.add("card")
    // const htmlData = `
    // <div class="card-head">
    //     <i class="save fas fa-save"></i>
    //     <i class="trash fas fa-trash"></i>
    // </div>
    // <textarea></textarea>
    // </div> `;
    // const save =card.querySelector(".save");
    // save.addEventListener('click',()=>{
    //     savecard()
    // })

    // card.querySelector(".trash").addEventListener('click',()=>{
    //     card.remove();
    // });
    // card.querySelector("save").addEventListener('click',()=>{
    //     savecard();
    // })
    // maincard.appendChild(card)
    // noteTxt.innerHTML=txt;
// }

// function savecard(){
//     const notes=document.querySelectorAll(".card textarea");
//     const data=[];
//     notes.forEach()
// }