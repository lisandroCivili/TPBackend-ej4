import Color from "../database/models/color.js"

export const crearColor = async(req, res)=>{
    try {
        const colorNuevo = new Color(req.body)
        await colorNuevo.save()
        res.status(201).json({
            mensaje: 'Color creado con exito'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al crear el color'
        })
    }
}
export const listarColores = async(req,res)=>{
    try {
        const colores = await Color.find()
        res.status(200).json(colores)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar los colores'
        })
    }
}

export const editarColor = async(req,res)=> {
    try {
        const colorBuscado = await Color.findById(req.params.id)
        if (!colorBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún color'
            })
        }
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'El color fue editado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al editar el color'
        })
    }}
export const borrarColor = async(req,res)=> {
    try {
        const colorBuscado = await Color.findById(req.params.id)
        if (!colorBuscado) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún color'
            })
        }
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'El color fue eliminado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al eliminar color'
        })
    }}
    export const obtenerColor = async(req,res)=>{
        try {
            console.log(req.params.id);
            const colorBuscado = await Color.findById(req.params.id)
            if (!colorBuscado) {
                return res.status(404).json({
                    mensaje: 'El ID enviado no corresponde a ningún color'
                })
            }
            res.status(200).json(colorBuscado)
        } catch (error) {
            console.error(error)
            res.status(400).json({
                mensaje: 'Error al buscar el color'
            })
        }
    }
    