import {
  connectDB
} from "../js/data-base.js";

export const templatePosts = () => {
  var user = firebase.auth().currentUser;
  const containerPosts = document.createElement("div");
  containerPosts.className = "containerPosts";
  if (user != null) {
    const contentPosts = `
      <textarea id="comentario"></textarea>
     <button class="button2" id="publicar">publicar</button>


    `;
    containerPosts.innerHTML = contentPosts;

    const buttonPublicar = containerPosts.querySelector("#publicar");
    buttonPublicar.addEventListener("click", () => {

      const comentario = document.getElementById("comentario").value;
      const autor = "Adriana";
      const titulo = "Primer Post";

      let database = connectDB();
      database.collection('posts').add({
        uid: user.uid,
        autor: user.email,
        titulo: titulo,
        comentario: comentario,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
      }).then(refDoc => {
        console.log(`Id del post => ${refDoc.id}`);
      }).catch( error => {
        console.log(`Error => ${error}`)
      })
    });
  } else {
    const contentPosts = `
      <h1>Logueate </h1>


    `;
    M.toast({
      html: 'Por favor realiza login en el sistema'
    })
    containerPosts.innerHTML = contentPosts;
    
  }


  return containerPosts;
};
