const app = require('./app');
const sequelize = require('./config/database.config');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.start();
    }

    async start() {
        try {
            await sequelize.authenticate();
            console.log('Database connected...');
            app.listen(this.port, () => {
                console.log(`Server is running on port ${this.port}`);
            });
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

module.exports = new Server();
