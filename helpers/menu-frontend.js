const getMenuFrontEnd=(role="USER_ROLE")=>{

  const menu= [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'home',
          url: '/',
        },

        // {
        //   titulo: 'Gráfica',
        //   url: 'grafica1',
        // },
        // {
        //   titulo: 'ProgressBar',
        //   url: 'progress',
        // },
        

        // {
        //   titulo: 'Promesas',
        //   url: 'promesas',
        // },
        // {
        //   titulo: 'Rxjs',
        //   url: 'rxjs',
        // },
      ],
    },
    
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        // {
        //   titulo: 'Usuarios',
        //   url: 'usuarios',
        // },

        // {
        //   titulo: 'Hospitales',
        //   url: 'hospitales',
        // },
        {
          titulo: 'Corredores',
          url: 'corredores',
        },
        

       
      ],
    },

    {
      titulo: 'Reporte',
      icono: 'mdi mdi-television-guide',
      submenu: [
        // {
        //   titulo: 'Usuarios',
        //   url: 'usuarios',
        // },

        // {
        //   titulo: 'Hospitales',
        //   url: 'hospitales',
        // },
        {
          titulo: 'Corredores detalles',
          url: 'CorredoresDetalles',
        },

        {
          titulo: 'Carreras detalles',
          url: 'CarrerasDetalles',
        },
        

       
      ],
    },
  ];

  if(role==='ADMIN_ROLE'){

    menu[1].submenu.unshift(  {
           titulo: 'Usuarios',
           url: 'usuarios',
         },),
    menu[1].submenu.unshift(  {
          titulo: 'Carreras',
          url: 'carreras',
        },)
  }

  return menu;
}

module.exports={

    getMenuFrontEnd
}