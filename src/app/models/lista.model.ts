import { ListaItem } from './lista-item.mocel';


export class Lista{
    id: number;
    titulo: string;
    creadaEn: Date;
    terminada: boolean;
    items: ListaItem[];
    constructor(titulo: string){
this.titulo = titulo;
this.creadaEn = new Date();
this.terminada = false;
this.items= [];
this.id  = new Date().getDate();
    }
}