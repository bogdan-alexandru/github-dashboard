import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;
    private http: any;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.text({type: 'application/graphql'}));
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();

		const options: cors.CorsOptions = { allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
		credentials: true,
		methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
		origin: 'http://localhost:4200',
		preflightContinue: false
		};

		router.use(cors(options));
		router.options("*", cors(options));
  
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello!'
            });
        });
        router.get('/dashboard', (req, response, next) => {
            const GithubGraphQLApi = require('node-github-graphql')
			const authToken = 'ef40997fdd55d713c3c0608265fd7833f396d89d';
            let github = new GithubGraphQLApi({
                token: process.env.GITHUB_API_TOKEN || authToken
            });

            github.query(`
				{
				  organization(login: "angular") {
					name
					url
					repositories(first: 15) {
					  nodes {
						name
						description
						createdAt
					  }
					}
				  }
				}
			`, null, (res, err) => {
                let nodes = res.data.organization.repositories.nodes;
                return response.json({
                    data: nodes
                });
            });
        });

        this.express.use('/', router);
    }
}

export default new App().express;