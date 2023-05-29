import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    const {nombre, email, mensaje} = req.body;

    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    }

    if(email.trim() === ''){
        errores.push({mensaje: 'El email está vacío'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'});
    }

    if(errores.length > 0){
        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje
        })
    }else {
        //Almacenar los datos en la db
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}