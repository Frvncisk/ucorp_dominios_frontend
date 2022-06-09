export interface ListaServicios{
    id: number;
    nombre : string;
    fecha_de_adquisicion : string;
    fecha_de_expiracion : string;
    servicio_tipo_id:string;
    tipo: {
        id: number;
        activo: boolean;
        nombre_servicio:string;
    }
}
