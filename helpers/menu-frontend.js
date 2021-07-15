const getMenuFrontEnd=(role="USER_ROLE")=>{

  const menu= [
    // {
    //   titulo: 'Principal',
    //   icono: 'mdi mdi-gauge',
    //   submenu: [
    //     {
    //       titulo: 'Dashboard',
    //       url: '/',
    //     },

    //     {
    //       titulo: 'Gráfica',
    //       url: 'grafica1',
    //     },
    //     {
    //       titulo: 'ProgressBar',
    //       url: 'progress',
    //     },
        

    //     {
    //       titulo: 'Promesas',
    //       url: 'promesas',
    //     },
    //     {
    //       titulo: 'Rxjs',
    //       url: 'rxjs',
    //     },
    //   ],
    // },
    
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
          titulo: 'Medicos',
          url: 'medicos',
        },
        

       
      ],
    },
  ];

  if(role==='ADMIN_ROLE'){

    menu[0].submenu.unshift(  {
           titulo: 'Usuarios',
           url: 'usuarios',
         },),
    menu[0].submenu.unshift(  {
          titulo: 'Hospitales',
          url: 'hospitales',
        },)
  }

  return menu;
}

module.exports={

    getMenuFrontEnd
}