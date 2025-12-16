const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'] // Mengizinkan semua origin untuk CORS
            }
        }
    });

    // Daftarkan semua rute
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`); // Perbaikan: info.uri bukan info.url
};

init();