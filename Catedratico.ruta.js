var  express  =  require ( 'express' ) ;
const  Usuarios  =  require ( '../Modelos/Usuarios.Modelo' ) ;
var  UsuariosModelo  =  require ( '../Modelos/Usuarios.Modelo' ) ;
var  UsuariosRuta  =  express . Enrutador ( ) ;

// Listar todos los elementos de una tabla
UsuariosRuta . get ( '/ usuarios' ,  function ( req , res ) {
   UsuariosModelo . selectAll ( function ( resultado ) {
       if  (  resultado ! == undefined )  {
           res . json ( resultado ) ;
       }  más  {
           res . json ( { mensaje : 'No hay nada' } ) ;
       }
   } ) 
} ) ;

// Listar un elemento especifico
UsuariosRuta . get ( '/ usuarios /: CarnetUsuario' ,  function ( req , res ) {
    var  id  =  req . params . CarnetUsuario ;
    UsuariosModelo . selectOne ( id , function ( resultado ) {
        if  ( resultado ! == undefined ) {
            res . json ( resultado ) ;
        } más {
            res . json ( { mensaje : 'No hay nada' } ) ;
        }
    } ) ;
} ) ;

// Crear un nuevo elemento 
UsuariosRuta . post ( '/ usuarios' ,  function ( req ,  res ) {
    var  data  =  req . el cuerpo ;
    UsuariosModelo . crear ( datos ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } ) ;
} ) ;

// Reemplazar un nuevo elemento 
UsuariosRuta . put ( '/ usuarios /: CarnetUsuario' ,  function ( req ,  res ) {
    var  CarnetUsuario  =  req . params . CarnetUsuario ;
    var  data  =  req . el cuerpo ;

    if ( CarnetUsuario  ==  data . CarnetUsuario ) {
        UsuariosModelo . editar ( datos ,  función ( resultado ) {
            si ( m resultado . affectedRows  >  0 ) {
                res . json ( resultado ) ;
            }  más  {
                res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
            }
        } ) ;
    } más {
        res . json ( { 'Mensaje' : 'No son el mismo id' } ) ;
    }   
} ) ;

// Eliminar un elemento
UsuariosRuta . delete ( '/ usuarios /: CarnetUsuario' ,  function ( req ,  res ) {
    var  CarnetUsuario  =  req . params . CarnetUsuario ;
    UsuariosModelo . eliminar ( CarnetUsuario ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } )
} ) ;

// Iniciar sesión (solo para esta tabla usuarios)
UsuariosRuta . get ( '/ usuarios /: CarnetUsuario,: ​​PassUsuario' ,  function ( req ,  res ) {
    var  CarnetUsuario  =  req . params . CarnetUsuario ;
    var  PassUsuario  =  req . params . PassUsuario ;
    UsuariosModelo . Validar ( CarnetUsuario ,  PassUsuario ,  function ( resultado ) {
        if ( resultado ! == undefined ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { "mensaje" : "No hay para validar (iniciar sesión)" } )
        }
    } )
} ) ;

módulo . exportaciones  =  UsuariosRuta ;