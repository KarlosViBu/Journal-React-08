import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => { 
  
    test('Debe subir el archivo correctamente a Cloudinary', async() => {
        
      const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');
        const segments = url.split('/');

        // console.log(url);

    });
 });