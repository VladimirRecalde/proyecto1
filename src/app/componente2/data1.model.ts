import { TypeReg } from './interface1.model';

const Persona1 :TypeReg =
{
    identificador:1,
    nombre:'Nombre 1',
    urlImagen:'https://static.iris.net.co/semana/upload/images/2018/8/10/579203_1.jpg',
    urlIcono:'https://static.iris.net.co/semana/upload/images/2018/8/10/579203_1.jpg',
    contadorLike:0,
    contadorDisLike:0,
    contadorTotal:0
}
     

const Persona2 :TypeReg =
{
    identificador:2,
    nombre:'Nombre persona 2',
    urlImagen:'https://material.angular.io/assets/img/examples/shiba1.jpg',
    urlIcono:'https://material.angular.io/assets/img/examples/shiba1.jpg',
    contadorLike:0,
    contadorDisLike:0,
    contadorTotal:0
}

const Persona3 :TypeReg =
{
    identificador:3,
    nombre:'Nombre persona 3',
    urlImagen:'http://raulperez.tieneblog.net/wp-content/uploads/2015/09/varita-tux.png',
    urlIcono:'http://raulperez.tieneblog.net/wp-content/uploads/2015/09/varita-tux.png',
    contadorLike:0, 
    contadorDisLike:0,
    contadorTotal:0
}

export const DatosPersonas: TypeReg[] =[Persona1,Persona2,Persona3]; 
