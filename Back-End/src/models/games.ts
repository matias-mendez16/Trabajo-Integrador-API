export class Games {
    public id: number;
    public nombre: string;
    public genero: string;
    public fechaLanzamiento: number;
    public desarrollador: string;
    public multijugador: boolean;

    constructor (id: number, nombre: string, genero: string, fechaLanzamiento: number, desarrollador: string, multijugador: boolean){
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.fechaLanzamiento = fechaLanzamiento;
        this.desarrollador = desarrollador;
        this.multijugador = multijugador
    }
}
