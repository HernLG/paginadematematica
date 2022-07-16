function cramer()

 {    

     for(i=1;i<=3;i++)

      {a[i]=[0,0,0,0];ax[i]=[0,0,0,0];ay[i]=[0,0,0,0];az[i]=[0,0,0,0];

        for(j=1;j<=4;j++)

         { a[i][j]=parseFloat(document.matriz[4*i+j-5].value)

               ax[i][j]=a[i][j];ay[i][j]=a[i][j];az[i][j]=a[i][j]   }    }

 if (det(a)==0) { alert("El sistema no es compatible determinado")  } 

             else { 

                         for(i=1;i<=3;i++)

                           {ax[i][1]=a[i][4];ay[i][2]=a[i][4];az[i][3]=a[i][4] }

                            document.matriz.x.value=det(ax)/det(a);

                            document.matriz.y.value=det(ay)/det(a);

                            document.matriz.z.value=det(az)/det(a) 

                        }

  }


     var a=new Array(3);ax=new Array(3);ay=new Array(3);az=new Array(3);

function det(a)

{

deta=a[1][1]*a[2][2]*a[3][3]+a[1][2]*a[2][3]*a[3][1]+a[2][1]*a[3][2]*a[1][3];

detb=a[1][3]*a[2][2]*a[3][1]+a[2][3]*a[3][2]*a[1][1]+a[1][2]*a[2][1]*a[3][3];

determ=deta-detb;

return determ

}

function cramer()

 {    

     for(i=1;i<=3;i++)

      {a[i]=[0,0,0,0];ax[i]=[0,0,0,0];ay[i]=[0,0,0,0];az[i]=[0,0,0,0];

        for(j=1;j<=4;j++)

         { a[i][j]=parseFloat(document.matriz[4*i+j-5].value)

               ax[i][j]=a[i][j];ay[i][j]=a[i][j];az[i][j]=a[i][j]      }

       }

     for(i=1;i<=3;i++)

      {ax[i][1]=a[i][4];ay[i][2]=a[i][4];az[i][3]=a[i][4] }

            document.matriz.x.value=det(ax)/det(a);

            document.matriz.y.value=det(ay)/det(a);

            document.matriz.z.value=det(az)/det(a)

  }

