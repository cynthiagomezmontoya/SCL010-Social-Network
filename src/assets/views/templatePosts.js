import {
  connectDB
} from "../js/data-base.js";
import {
  authSignOut
} from "../js/authentication.js";


export const templatePosts = () => {
  var user = firebase.auth().currentUser;
  const containerPosts = document.createElement("div");
  containerPosts.className = "containerPosts";
  //if (user != null) {
   const contentPosts = `

  <div class="wall">
<section class="posts" id="posts">        
    </section>

  </div>
  <div id="navegador">

      <section class="buttPuPhOu">
      <div><button class="buttPub" id="publicar">Crear Publicación</button></div>
      <div><button class="buttPho" id="pushPhoto">Sube tu Foto</button></div>
      <div><button class="buttOut" id="signOut">Cerrar Sesión</button></div>
      </section>

  </div>
    

     


    `;
    containerPosts.innerHTML = contentPosts;
    let posts = showPosts(containerPosts.querySelector("#posts"));
    const buttonPublicar = containerPosts.querySelector("#publicar");
    buttonPublicar.addEventListener("click", () => {
      location.href = "#/newPost"
    });

    const buttonSignOut = containerPosts.querySelector("#signOut");
    buttonSignOut.addEventListener("click", () => {
      authSignOut();
    });


/*  } else {
    M.toast({
      html: 'Por favor realiza login en el sistema'
    })
    location.href = "#/login"
    
  }*/

  return containerPosts;
};


 export const   showPosts = (posts) => {
      let database = connectDB();
      
      database.collection('posts').onSnapshot(querySnapshot => {
        posts.innerHTML = "";
        if (querySnapshot.empty){
          posts.innerHTML = obtenerTemplatePostVacio();
        }else {
          let postHtml = "";
          querySnapshot.forEach( post => {
            postHtml = obtenerPostTemplate(
              post.data().autor,
              post.data().titulo,
              post.data().comentario,
              obtenerFecha(post.data().fecha.toDate())
            ) + postHtml;
          });
         posts.innerHTML = postHtml;
        }
      });
      return posts;
    }

export const obtenerTemplatePostVacio = () => {
    return `
      <div class="post-titulo">
          <h5>Crea el primer Post a la comunidad</h5>
 
      </div>
  `
  }
  export const obtenerPostTemplate  = ( autor, titulo, comentario, fecha) => {
    return `<article class="post">
                <div class="post-titulo">

                    <h5><strong>${titulo}</strong></h5>
                </div>
                <div class="post-descripcion">
                    <h6>${comentario}</h6>

                </div>
                <div class="post-footer container">
                    <div class="row">
                        <div class="col m6">
                            Fecha: ${fecha}
                        </div>
                        <div class="col m6">
                            Autor: ${autor}
                        </div>        
                    </div>
                </div>
                  <section class="buttons">
      <button class="bLike">Me gusta</button>
      <button class="bComment">Comentar</button>
      <button class="bEdit">Editar</button>
      <button class="bRemove">Eliminar</button>
  </section>
            </article>`
  }

  export const obtenerFecha = (timeStamp) => {    
    const d = new Date(timeStamp)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('/')
  }