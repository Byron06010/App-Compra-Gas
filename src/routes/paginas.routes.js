const {Router}=require("express")
const router2=Router()

const {renderprice,renderhome,renderpago,rendertrabajador, rendersales, renderperfil
}=require("../controllers/pagina.controllers")

const {isAuthenticated}=require("../helpers/auth")

router2.get("/paginas/precios",renderprice)

router2.get("/paginas/principal",renderhome)

router2.get("/paginas/pago",renderpago)

router2.get("/paginas/trabajador",rendertrabajador)

router2.get("/paginas/sales",rendersales)

router2.get("/paginas/perfil",renderperfil)

module.exports=router2