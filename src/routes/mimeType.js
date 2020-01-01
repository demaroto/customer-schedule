export const handleMimeType = url =>{

    var ext = url.split('.')

    switch(ext[1]) {

        case 'html':
            return 'text/html'
        break

        case 'css':
            return 'text/css'
        break

        case 'js':
            return 'text/javascript'
        break

        case 'png':
            return 'image/png'
        break

        default:
            return 'text/html'
        break;
    }

}