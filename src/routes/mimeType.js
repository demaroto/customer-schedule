export const handleMimeType = url =>{

    const mimetypes = ['html', 'css', 'js']

    var ext = url.split('.')
    var mimeType = mimetypes.indexOf(ext[1]);

    switch(mimeType) {

        case 0:
            return 'text/html'
        break

        case 1:
            return 'text/css'
        break

        case 2:
            return 'text/javascript'
        break

        default:
            return 'text/html'
        break;
    }

}