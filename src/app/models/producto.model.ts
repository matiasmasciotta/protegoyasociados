export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
  }

  
  export const PRODUCTOS: Producto[] = [
    {
      id: 1,
      nombre: 'Aceite de coco',
      descripcion: 'Aceite de coco neutro en frasco 250cc',
      imagen: 'https://acdn-us.mitiendanube.com/stores/001/326/060/products/aceite-de-coco-neutro-entrenuts-sin-tacc-360g1-f61f6b4bc91ab4a99216573005373883-1024-1024.jpg'
    },
    {
      id: 2,
      nombre: 'Mantequilla de maní King',
      descripcion: 'Mantequilla de mani tipo crunch.',
      imagen: 'https://acdn.mitiendanube.com/stores/323/592/products/img-20231012-wa0056-097b4c15c4308e8df1169715166873871-029ec1e6a45de7d7fb16971516780497-640-0.jpg'
    },
    {
      id: 3,
      nombre: 'Harina de Almendras',
      descripcion: 'Harina de almendras.',
      imagen: 'https://f2h.shop/media/catalog/product/cache/93d5117b0af277427072d0e205016731/h/a/harina_de_almendras_x_200_g_sin_tacc_dicomere.png'
    },
    {
      id: 4,
      nombre: 'Harina de coco',
      descripcion: 'Harina de coco Dicomerce.',
      imagen: 'https://distribuidoraliliana.com.ar/4645-thickbox_default/harina-de-coco-sin-tacc-x-200-grs-dicomere.jpg'
    },
    {
      id: 5,
      nombre: 'Cacao amargo',
      descripcion: 'Cacao amargo sin azucar',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUADxO2CS0-rsMVPogRyIdymbM-x4ZmPiTGEGnaCXoP4Vrz0JzIV4mFfZcUmfL9RbQ5BE&usqp=CAU'
    },
    {
      id: 6,
      nombre: 'Almendras x100 gramos',
      descripcion: 'Almendras por peso',
      imagen: 'https://deliciaskitchen.b-cdn.net/wp-content/uploads/2021/06/almendras-propiedades-beneficios-y-contraindicaciones-1170x781.webp'
    }
  ];