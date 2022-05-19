export const formContact ={
    name:{
        required:{
            value: true,
            message: "El nombre es requerido."
        },
        minLenth:{
            value: 3,
            message: "Debe tener al menos 3 carácteres."
        },
        maxLength:{
            value:20,
            message:"El máximo son 20 carácteres."
        }
    },
    email:{
        required:{
            value: true,
            message:"El email es requerido."
        },
        pattern:{
            value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "El email debe ser válido."
        }
    },
    comment:{
        required:{
            value: true,
            message:"El campo mensaje es requerido."
        },
        minLength:{
            value:20,
            message:"Debe tener al menos 20 carácteres."
        }
    }
}